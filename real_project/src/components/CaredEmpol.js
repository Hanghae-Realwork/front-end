import styled from "styled-components"

function CradEmpol () {

    return(
        <>
            <AllCardWrap>
                <CardTopWrap>
                    <ProfileWrap>
                        <ProfileCircle></ProfileCircle>
                    </ProfileWrap>
                    <CardTextWrap>
                        <CardTitle>[작성자이름]</CardTitle>
                        <CardText>[FrontEnd개발자]</CardText>
                    </CardTextWrap>
                </CardTopWrap>

            </AllCardWrap>
        </>

    )
}



const AllCardWrap = styled.div`
    border: 1px solid black;
    width: 384px;
    height: 250px;
    margin: 50px;
`

const CardTopWrap = styled.div`
    border: 1px solid black;
    width: 190px;
    height: 70px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
`

const CardTextWrap = styled.div`
    border: 1px solid black;
`


const CardTitle = styled.div`
    border: 1px solid black;
    width: 100px;
    height: 27px;
    font-weight: 700;
    font-size: 18px;
`

const CardText = styled.div`
    border: 1px solid black;
    width: 110px;
    height: 21px;
    font-size: 14px;
`

const ProfileWrap = styled.div`
    border: 1px solid black;
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ProfileCircle = styled.div`
    border: 1px solid black;
    width: 60px;
    height: 60px;
    border-radius: 60px;
`

export default CradEmpol