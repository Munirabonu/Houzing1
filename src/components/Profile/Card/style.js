import styled from "styled-components";



const Card_item = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  :hover {
    filter: drop-shadow(0px,20px,38px,rgba(0,0,0,0.06))
    drop-shadow(0px,7px,46px,rgba(0,0,0,0.06))
    drop-shadow(0px,8px,15px,rgba(0,0,0,0.06))
    ;
  }


`;

const Img = styled.img`
  width: 113px !important;
  height: 113px !important;
  background: rgb(237,177,203);
background: radial-gradient(circle, rgba(237,177,203,1) 0%, rgba(224,176,207,1) 16%, rgba(148,187,233,0.6029762246695554) 100%);
`

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding:0 16px;
  justify-content: space-between;
`
const Info = styled.div``;

Info.Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px 0;
  line-height: 24px;
  color: #0D263B;
  font-size: 16px;
`
Info.Text = styled.div`
  display: flex;
  font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #696969;
`
Info.Sale=styled(Info.Text)`
  font-size: 12px;
  text-decoration: line-through;
  line-height: 20px;
`
Info.Origin=styled(Info.Title)``







export { Card_item, Img, Info, InfoWrapper };
