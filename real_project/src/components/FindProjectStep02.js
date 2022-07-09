import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { createRecruitApi } from "../redux/modules/postRecruit";
import { useDispatch } from "react-redux";
import SelectSkill from "./SelectSkill";
import { useForm } from "react-hook-form";
import axios from "axios";
const FindProjectStep02 = (props) => {
  const dispatch = useDispatch
  const navigate = useNavigate()
  const storageData = sessionStorage.getItem('obj')
  const addData = JSON.parse(storageData);
  const token = localStorage.getItem("accesstocken");
  console.log(addData)

  const onSubmit = async (data) => {
    console.log(data)
    const output = {
      ...data,
      ...addData,
      photos:
        ["",
          ""],
      email: "mymail@email.com",
      phone: "010-5555-5555",
      // schedule: {"2022-07-01": {availabe:true}}
    }
    await new Promise((r) => setTimeout(r, 1000));

    // await new localStorage.removeItem('obj')((r) => setTimeout(r, 3600000));
    axios({
      method: "post",
      url: "http://3.39.226.20/api/projects",
      data: JSON.stringify(output),
      headers: {
        "content-type": `application/json`,
        "Authorization": `Bearer ${token}`
        // "Content-Type": "multipart/form-data"
      }
    })
      .then((res) => {
        alert("프로젝트 등록완료!")
        sessionStorage.removeItem('obj')
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });

    // dispatch(
    //   createRecruitApi({
    //     ...output
    //   })
    // );
    // navigate(`/findprojectstep2`)
    console.log(output)
  }

  const dvelopSkills_list = [
    { data: 'React' },
    { data: 'Vue.js' },
    { data: 'JavaScript' },
    { data: 'Node.js' },
    { data: 'Java' },
    { data: 'Spring' },
    { data: 'Python' },
    { data: 'MongoDB' },
    { data: 'MySQL' },
    { data: 'Redis' },
    { data: 'TypeScript' },
    { data: 'Ruby' },
    { data: 'AWS' },
    { data: 'Go' },
    { data: 'PHP' },
    { data: 'Git' },
    { data: '.NET' },
    { data: 'React Native' },
    { data: 'Django' },
    { data: 'Flask' },
    { data: 'Nest.JS' },
    { data: 'Express.JS' },
    { data: 'NoSQL' },
    { data: 'SQL' },
    { data: 'Swift' },
    { data: 'Kotlin' },
    { data: 'Android' },
    { data: 'iOS' },
  ]
  const designerSkills_list = [
    { data: 'Figma' },
    { data: 'Adobe XD' },
    { data: 'Adobe Illustrator' },
    { data: 'Adobe PhotoShop' },
    { data: 'Invision' },
    { data: 'Sketch' },
    { data: 'Protopie' },
  ]
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isDirty, errors },
  } = useForm();





  return (
    <>
      <FindProjectAllWrap>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FindprojectTopWrap>
            <FindProjectTitleText>새로운 크루 모집하기</FindProjectTitleText>
          </FindprojectTopWrap>
          <HeadLine />
          <FindProjectStepWrap>
            <FindProjectStepGuideText>1. 프로젝트 설명하기 2.크루 모집하기</FindProjectStepGuideText>
          </FindProjectStepWrap>
          <HeadLine />
          <div>
            <span>구하는 직군</span>
            <div>
              <label><input id="role" type="radio" name="Radio"  value="frontend" {...register("role")} />FrontEnd</label>
              <label><input id="role" type="radio" name="Radio" value="backend" {...register("role")} />BackEnd</label>
              <label><input id="role" type="radio" name="Radio" value="graphicDesigner" {...register("role")} />Designer</label>
            </div>
          </div>
          <div>
            {/* 셀렉트스킬 컴포넌트  */}
            <SelectSkill />
            {dvelopSkills_list && dvelopSkills_list.map((list, idx) => {
              return <div><input id="skills" type="checkbox" value={list.data} {...register("skills")} />{list.data}</div>;
            })}
            {designerSkills_list && designerSkills_list.map((list, idx) => {
              return <div>
                <input
                  id="skills"
                  type="checkbox"
                  value={list.data}
                  {...register("skills")}
                />
                {list.data}
              </div>;
            })}




          </div>
          <div>
            캘린더 및 일정 잡는 기능이 들어갈 페이지 입니다. 추후 보강 됩니다.
          </div>
          <div>
            <div><button onClick={() => { navigate(`/findprojectstep1`) }}>이전 단계로</button></div>
            <div><button type="submit" disabled={isSubmitting}>등록하기</button></div>
          </div>
        </form>
      </FindProjectAllWrap>
    </>
  );
};

const FindProjectAllWrap = styled.div`
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
const FindProjectStepGuideText = styled.span`
  font-size: 18px;
  font-weight: 500;
  margin: 17px 0px 23px 30px;
`
const FindProjectStepWrap = styled.div`
  height: 67px;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
`
const HeadLine = styled.hr`
  border: 1px solid #D9D9D9;
  width: 1200px;
`
export default FindProjectStep02;

