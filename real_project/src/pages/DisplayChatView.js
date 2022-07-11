import React from "react";
import styled from "styled-components";
import io from "socket.io-client"

function DisplayChatView() {

    const socket = io();

    const myFace = document.getElementById("myFace");
    const muteBtn = document.getElementById("mute");
    const cameraBtn = document.getElementById("camera");
    const camerasSelect = document.getElementById("cameras");
    
    const call  = document.getElementById("call")
    const chat  = document.getElementById("chat")
    
    call.hidden = true;
    chat.hidden = true;
    
    let myStream;
    let muted = false;
    let cameraOff = false;
    let roomName;
    let myPeerConnection;
    
    async function getCameras() {
        try {
            const devices = await navigator.mediaDevices.enumerateDevices();        
            const cameras = devices.filter(device => device.kind === "videoinput");
            const currentCamera = myStream.getVideoTracks()[0];
            cameras.forEach(camera => {
                const option = document.createElement("option");
                option.value = camera.deviceId
                option.innerText = camera.label
                if (currentCamera.label == camera.label) {
                    option.selected = true;
                }
                camerasSelect.appendChild(option)
            })        
        } catch (e) {
            console.log (e)
        }
    }
    
    async function getMedia(deviceId) {
        const initialConstraints = {
            audio : true,
            video : { facingMode : "user"}, 
        };
    
        const cameraConstraints = {
            audio : true, 
            video : {deviceId: { exact : deviceId}},
        }
        try {
            myStream = await navigator.mediaDevices.getUserMedia(
                deviceId? cameraConstraints : initialConstraints
                );            
                myFace.srcObject = myStream;
                if (!deviceId) {
                    await getCameras();
                }
        } catch(e){
            console.log(e)
        }
    }
    
    function handleMuteClick () {    
        myStream.getAudioTracks().forEach((track) => (track.enabled = !track.enabled));
        if (!muted) {
            muteBtn.innerText = "Unmute"        
            muted = true;
        } else {
            muteBtn.innerText = "Mute"        
            muted = false;
        }
    }
    
    function handleCameraClick () {    
        myStream.getVideoTracks().forEach((track) => (track.enabled = !track.enabled));
        if (cameraOff) {
            cameraBtn.innerText = "Turn Camera Off"        
            cameraOff = false
        } else {
            cameraBtn.innerText = "Turn Camera On"        
            cameraOff = true
        }
    }
    
    async function handleCameraChange() {
        await getMedia(camerasSelect.value)
        if (myPeerConnection) {
            const videoTrack = myStream.getVideoTracks()[0];
            const videoSender = myPeerConnection.getSenders().find((sender) => sender.track.kind === "video");
            videoSender.replaceTrack(videoTrack);
        }
    }
    
    muteBtn.addEventListener("click", handleMuteClick);
    cameraBtn.addEventListener("click", handleCameraClick);
    camerasSelect.addEventListener("input", handleCameraChange);
    
    
    // welcome Form (choose a room)
    const welcome = document.getElementById("welcome")
    const welcomeForm = welcome.querySelector("form");
    
    async function initCall() {
        welcome.hidden = true; 
        call.hidden = false;
        chat.hidden = false;
    
        const msgForm = chat.querySelector("#msg");
        msgForm.addEventListener("submit", handleMessageSubmit)  
    
        await getMedia();
        makeConnection();
    };
    
    // (2) interview code(room name)을 입력받고 join_room에 전달한다. 
    async function handleWelcomeSubmit(event) {
        event.preventDefault();
        const input = welcomeForm.querySelector("input");
        socket.emit("check_code", input.value );  
        roomName = input.value
        input.value=""
    }
    
    socket.on("right_code", async (roomName) => {
        await initCall();
        socket.emit("join_room", roomName );                
    });
    
    socket.on("wrong_code", (errormessage) => {
        alert(errormessage);
    });
    
    // 방 입장하기
    welcomeForm.addEventListener("submit", handleWelcomeSubmit)
    
    //socket code part 1 : 영상채팅용 socket 통신 (WebRTC peer-to-peer 연결을 위한 부분)
    
    // (4) 방에 입장되었다. 시그널링을 시작함, offer의 내용을 만들어 서버에 보낸다. 
    socket.on("welcome", async () => {
        const offer = await myPeerConnection.createOffer();    
        myPeerConnection.setLocalDescription(offer)
        console.log("sent the offer")
        socket.emit("offer", offer, roomName);
    });
    
    // (6) offer를 받았다. answer의 내용을 만들어 서버에 보낸다. 
    socket.on("offer", async (offer) => {
        console.log("received the offer")
        myPeerConnection.setRemoteDescription(offer);
        const answer = await myPeerConnection.createAnswer();
        myPeerConnection.setLocalDescription(answer);
        socket.emit("answer", answer, roomName);
        console.log("sent the answer")
    });
    
    // (8) answer까지 받았다. remote description 을 생성한다. 
    socket.on("answer", (answer) => {
        console.log("received the answer")
        myPeerConnection.setRemoteDescription(answer);
    });
    
    socket.on("ice", ice => {
        console.log("received candidate")
        myPeerConnection.addIceCandidate(ice);
    })
    
    //socket code part 2 : 텍스트 채팅 핸들링 + 방 나가기 핸들링
    
    function addMessage(message) {
        const ul = chat.querySelector("ul")
        const li = document.createElement("li")
        li.innerText = message;
        ul.appendChild(li);
    }
    
    async function handleMessageSubmit(event) {
        event.preventDefault();
        const input = chat.querySelector("#msg input");
        const value = input.value
       
        socket.emit("new_message", input.value, roomName, () => {
            addMessage(`You : ${value}`);    
        });
        input.value=""
    }
    
    socket.on("new_message", (msg) => {addMessage(msg)});
    
    // socket.on("bye", (left, newCount) => {
    //     const h3 = room.querySelector("h3");
    //     h3.innerText = `Room ${roomName} (${newCount})`;
    //     addMessage(`${left} left...`)
    // })
    
    
    // WebRTC Code
    
    function makeConnection () {
        myPeerConnection = new RTCPeerConnection({
    
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' },
                { 
                    username: 'alphafly',
                    credential: '1324',
                    urls: [
                        'turn:3.34.42.87:3478?transport=tcp',
                        'turn:3.34.42.87:3478?transport=udp',                    
                        'turn:3.34.42.87:80?transport=tcp',
                        'turn:3.34.42.87:80?transport=udp',
                        'turns:3.34.42.87:443?transport=tcp',
                        'turns:3.34.42.87:5349?transport=tcp',
                        ] 
                }
            ]
        });
        myPeerConnection.addEventListener("icecandidate", handleIce)
        myPeerConnection.addEventListener("addstream", handleAddStream)
        myStream.getTracks().forEach(track => myPeerConnection.addTrack(track, myStream));
    }
    
    function handleIce (data) {
        console.log("sent candidate")
        socket.emit("ice", data.candidate, roomName)    
    }
    
    function handleAddStream(data) {
        const peerFace = document.getElementById("peerFace");    
        peerFace.srcObject = data.stream    
    }


  return (
    <>
      <AllWrap>
        <ViewWrap>
            {/* {getCameras} */}
            <SelfViewWrap></SelfViewWrap>
        </ViewWrap>
        <ChatWrap>
            <ChatTop>
                <ChatTitle>채팅</ChatTitle>
            </ChatTop>

            <ChatInputWrap>
                <ChatInput></ChatInput><SendButton>보내기</SendButton>
            </ChatInputWrap>
        </ChatWrap>
      </AllWrap>
    </>
  );
}


const AllWrap = styled.div`
    border: 1px solid black;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`

const ViewWrap = styled.div`
    border: 1px solid black;
    width: 894px;
    height: 601px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin-top: 20px;
`

const SelfViewWrap = styled.div`
    border: 1px solid black;
    width: 301px;
    height: 188px;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0px 540px 51px 0px;
`

const ChatWrap = styled.div`
    border: 1px solid black;
    width: 282px;
    height:758px;
    margin: 20px 0px 42px 24px;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
`

const ChatTop = styled.div`
    background-color: #303032;
    width: 282px;
    height: 48px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

const ChatTitle = styled.span`
    font-size: 20px;
    font-weight: 700;
    color: white;
    margin: 12px 0px 12px 17px;
`

const ChatInputWrap = styled.div`
    /* background-color: #303032; */
    width: 268px;
    height: 48px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 14px;
    border-radius: 10px;
    border: 1px solid black;
`

const ChatInput = styled.input`
    border: none;
    outline: none;
    padding: 10px;
    width: 170px;
`

const SendButton = styled.button`
    border: none;
    outline: none;
    padding: 6px 12px 6px 12px;
    border-radius: 10px;
    background-color: #303032;
    color: white;
    margin: 8px;
`

export default DisplayChatView;
