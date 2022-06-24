import React from "react";
import { Button } from "../../Generic";
import { Card_item, Img, Info, InfoWrapper } from "./style";

export const Card = ({ info, mr, ml, margin,onClick }) => {
  return (
     <Card_item className="nocopy" onClick={onClick}>
       <Img src={info?.attachments[0]?.imgPath || 'no img'} alt='house img' />
       <InfoWrapper>
         <div>
         <Info.Title>{info?.description || "description"}</Info.Title>
         <Info.Text>
           {info?.name || "name"},
           {info?.address || "address"},
           {info?.city || "City"},
           {info?.country || "Country"},
         </Info.Text>
         </div>
         <div>
           <Info.Sale>{info?.salePrice || 0} / month</Info.Sale>
           <Info.Origin>{info?.salePrice || 0} / month</Info.Origin>
         </div>
       </InfoWrapper>
       <Button width={'71px'} height={"23px"} type={'primary'}>for sale</Button>
     </Card_item>
  )
};

export default Card;
