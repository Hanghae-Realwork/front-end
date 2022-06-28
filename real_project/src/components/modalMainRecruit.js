import React, { useState } from 'react';
// import "../css/Modal.css";

const modalMainRecruit = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;



//   const fileInput = React.useRef();
//   const [preview, setPreview] = useState("");

//   const selectFile = (e) => {
//     const reader = new FileReader();
//     const file = fileInput.current.files[0];
//     reader.readAsDataURL(file);

//     reader.onload = function (e) {
//       setPreview(e.target.result);
//     };
//   };




  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close} >
              선택취소 &times;
            </button>
          </header>
          <main>
            자바스크립트
            <input type="checkbox" placeholder="자바스크립트" value={"자바스크립트"}></input>
            <input type="text" placeholder="리액트" value={"react"}></input>
          </main>
          <footer>
            <button className="close" onClick={close}>
              입력
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

export default modalMainRecruit;