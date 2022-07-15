import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { checkUserValidation } from "../redux/modules/user";
import { 
  projectsPhotosAxios,
  LoadDetailAxios, 
  editRecruitAxios, 
 } from "../redux/modules/postRecruit";
import { dvelopSkills_list, designerSkills_list} from "../shared/developeSkills";

import addimage from "../image/addimage.svg"


function FindProjectStep01 (props) {

  const { projectId } = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const titleRef = useRef(null);
  const subscriptRef = useRef(null);
  const detailsRef = useRef(null);

  const [role, setRole] = useState("");
  

  //캘린더 (22.07.12 추가 전 / 코코미 코드)
  const [start, setStart] = useState("2022-02-02")
  const [end, setEnd] = useState("2022-02-04")
  
  //사진 파일 유무
  const [filesImg, setFilesImg] = useState("");
  const [files, setFiles] = useState("");
  const [checkList, setCheckList] = useState([]);

 
  //Role 값 (코코미 코드)
  const onChangeRole = (e) => {
    setRole(e.target.value);
  };

  const loginInfo = useSelector((state) => state.user.userInfo.is_login);
  const userEdit = useSelector((state) => state.postRecruit.project);

  console.log(userEdit)

  //skills:onChenge 함수를 사용하여 이벤트를 감지, 필요한 값 받아온다. (코코미 코드)
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckList([...checkList, item]);
    } else if (!checked) {
      setCheckList(checkList.filter((el) => el !== item));
    }
  };

  useEffect(() => {
    if (loginInfo === false) {
      dispatch(checkUserValidation());
    }
  }, [loginInfo]);

     useEffect(() => {
       dispatch(LoadDetailAxios(projectId));
     }, []); 


  //fileReader
  const frm = new FormData();
  const reader = new FileReader();


  //이미지 파일 코드(코코코코코코미)
  const onChangeImg = (e) => {
    const file = e.target.files;
    setFiles(file);


  //fileReader
  setFilesImg(e.target.files[0]);
  reader.readAsDataURL(e.target.files[0]);

  return new Promise((resolve) => {
    reader.onload = () => {
      setFilesImg(reader.result);
      resolve();
      };
    });
  };


  // 저장 버튼
  const CompliteEdit = async() => {
    frm.append("photos", files[0]);
    try {
        await dispatch(projectsPhotosAxios(frm)).then((success) => {
          console.log()

          dispatch(
            editRecruitAxios(
              titleRef.current.value,
              detailsRef.current.value,
              subscriptRef.current.value,
              role,
              start,
              end,
              checkList,
              success,
              ["2022-07-01 02:02:02", "2022-07-02 03:03:03"]
            )
          );

          })
        navigate("/mainrecruit");
        } catch(err){
          alert("error")
          console.log(err)
        }
      }


  return (
    <>
      <FindProjectAllWrap>
          <FindprojectTopWrap>
            <ProjectTitleText>새로운 크루 모집하기</ProjectTitleText>
          </FindprojectTopWrap>
          <HeadLine />
          <FindProjectInputTitle>
            <ProjectTitleText>제목 (최대 n자 이내)</ProjectTitleText>
            <ProjectInput ref={titleRef} id="title" type="text" defaultValue={userEdit[0]?.title}></ProjectInput>
          </FindProjectInputTitle>
          <FindProjectInputTitle>
            <ProjectTitleText>프로젝트 설명 (최대 n자 이내)</ProjectTitleText>
            <ProjectInput ref={subscriptRef} id="subscript" type="text" defaultValue={userEdit[0]?.subscript}></ProjectInput>
          </FindProjectInputTitle>
          <FindProjectInputDate>
            <ProjectTitleText>프로젝트 기간</ProjectTitleText>
            <div>
               달력이 들어갈 공간 입니다.
              <div>
              </div>
            </div>
          </FindProjectInputDate>
          <FindProjectInputTitle>
            <ProjectTitleText>팀 상세 설명</ProjectTitleText>
            <ReMainConWrap>
              <RecMainCon ref={detailsRef} id="details" type="text" defaultValue={userEdit[0]?.details} />
                <PhotoUPloadWrap>
                  {filesImg ? (<UpPhotoArea alt="sample" id="showImg" src={filesImg} />
                ) : (<DisablePhotoWrap></DisablePhotoWrap>)}
                  <EditWrapPhoto>
                    {filesImg ? (
                      <PhotoText>수정하기 <input name="imgUpload" type="file" id="add_img"
                          accept="image/*" onChange={onChangeImg}/>
                      </PhotoText>
                    ) : (
                      <PhotoText>등록하기 <input name="imgUpload" type="file" id="add_img"
                          accept="image/*" onChange={onChangeImg}/>
                      </PhotoText>
                    )}
                  </EditWrapPhoto>
                </PhotoUPloadWrap>
            </ReMainConWrap>
          </FindProjectInputTitle>
          <FindProjectInputTitle>
            <ProjectTitleText>구하는 직군</ProjectTitleText>
            <div>
              <label><input id="role" type="radio" name="Radio"  value="frontend" onChange={onChangeRole} />FrontEnd</label>
              <label><input id="role" type="radio" name="Radio" value="backend" onChange={onChangeRole} />BackEnd</label>
              <label><input id="role" type="radio" name="Radio" value="designer" onChange={onChangeRole} />Designer</label>
            </div>
          </FindProjectInputTitle>
          
          <SkillWrap>
                <SkillTitleTextTag>개발자</SkillTitleTextTag>
                <SelectBoxTab>
                  {dvelopSkills_list && dvelopSkills_list.map((list, idx) => {
                      return (
                        <TecLabel key={idx}>
                          <CheckBox type="checkbox" id="skills" value={list.data}
                            onChange={(e) => {
                              //onchange이벤트 발생 시 checked여부와 value값을 배열 데이터에 넣는다.
                              onCheckedElement(
                                e.target.checked,
                                e.target.value
                              );
                            }}
                            checked={ checkList.includes(list.data) ? true : false }
                          ></CheckBox>
                          {list.data}
                        </TecLabel>
                      );
                    })}
                    </SelectBoxTab>
                    </SkillWrap>
                    <SkillWrap>
                <SkillTitleTextTag>디자이너</SkillTitleTextTag>
                <SelectBoxTab>
                  {designerSkills_list && designerSkills_list.map((list, idx) => {
                      return (
                        <TecLabel key={idx}>
                          <CheckBox type="checkbox" id="skills" value={list.data}
                            onChange={(e) => {
                              onCheckedElement(
                                e.target.checked,
                                e.target.value
                              );
                            }}
                          ></CheckBox>
                          {list.data}
                        </TecLabel>
                      );
                    })}
                </SelectBoxTab>
              </SkillWrap>
          <div>
            캘린더 및 일정 잡는 기능이 들어갈 페이지 입니다. 추후 보강 됩니다.
          </div>
          <SubmitButtonWrap>
            <SubmitButton onClick={CompliteEdit} >등록하기</SubmitButton>
          </SubmitButtonWrap>
      </FindProjectAllWrap>
    </>
  );
};


const FindProjectAllWrap = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`

const FindProjectTitleText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin: 30px 0px 30px 32px;
`
const FindprojectTopWrap = styled.div`
  height: 90px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`

const HeadLine = styled.hr`
  border: 1px solid #D9D9D9;
  width: 1200px;
`

const FindProjectInputDate = styled.div`
  margin: 40px 0px 16px 30px;
  width: 1100px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`

const FindProjectInputTitle = styled.div`
  /* border: 1px solid black; */
  margin: 40px 0px 16px 30px;
  width: 1100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`

const ProjectInput = styled.input`
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  padding: 8px;
  width: 1000px;
  margin-top: 16px;
`

const SkillWrap = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  width: 580px;
  padding: 10px;
  /* border: 1px solid black; */
`;

const SelectBoxTab = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 13px;
`;

const SubmitButtonWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`

const SubmitButton = styled.button`
  width: 150px;
  height: 45px;
  background: linear-gradient(115.2deg, #AE97E3 0%, #77C3E7 77.66%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 30px 0px 30px 0px;
  padding: 12px 28px;
  color: white;
  font-weight: 700;
`

const ProjectTitleText = styled.span`
  font-size: 16px;
  font-weight: 500;
  gap: 15px;
`

const SkillTitleTextTag = styled.p`
  font-weight: bold;
  color: #ae97e3;
`;

const TecLabel = styled.label`
  font-size: 14px;
  /* border: 1px solid black; */
`;

const CheckBox = styled.input`
  appearance: none;
  border: 0.5px solid gainsboro;
  border-radius: 0.25rem;
  width: 15px;
  height: 15px;
  margin-bottom: -3px;
  margin-right: 5px;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: #ae97e3;
  }
`;

const UpPhotoArea =styled.img`
  /* border: 1px solid black; */
  width: 120px;
  height: 100px;
  background-position: center;
  background-size: cover;
`

const DisablePhotoWrap = styled.div`
  /* border: 1px solid black; */
  background-image: url(${addimage});
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-position: center;
  background-size: cover;
`

const EditWrapPhoto = styled.div`
  /* border: 1px solid black; */
  width: 150px;
  height: 90px;
  background-position: center;
  background-size: cover;
`

const PhotoText = styled.span`
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`
const ReMainConWrap = styled.div`
  border: 1px solid black;
  width: 1000px; 
  height: 500px;
  border-radius: 4px;  
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
`

const RecMainCon = styled.textarea`
  /* margin: 20px;  */
  padding: 10px; 
  width: 975px; 
  height: 350px; 
  outline: none; 
  border: none;
  resize: none;
  /* border-radius: 4px; */
`;

const PhotoUPloadWrap = styled.div`
  /* border: 1px solid black; */
  padding: 10px;
  width: 975px;
  height: 100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`


export default FindProjectStep01;
