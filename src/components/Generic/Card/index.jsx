import React from "react";
import { Card_item, Container, Icons, Img, Info, InfoWrapper, Price, User } from "./style";

export const Card = ({ info, mr, ml, margin }) => {
  return (

    <Card_item className="nocopy">
      <Img src={info?.attachments[0]?.imgPath || 'no img'} alt='house img' />
      <InfoWrapper>
        <User>
          <User.Img src={info?.user || 'no img'} />
        </User>

        <Info.Title>{info?.description || "description"}</Info.Title>
        <Info.Text>
          {info?.name || "name"},
          {info?.address || "address"},
          {info?.city || "City"},
          {info?.country || "Country"},
        </Info.Text>
        <Info.Detailes>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>{info?.houseDetailes.beds || 0}Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>{info?.houseDetailes.beds || 0}Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>{info?.houseDetailes.beds || 0}Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>{info?.houseDetailes.beds || 0}Beds</Info.Text>
          </Icons.Wrapper>

        </Info.Detailes>
      </InfoWrapper>
      <Price>
        <Price.Wrapper>
          <Price.Sale>{info?.salePrice || 0} / month</Price.Sale>
          <Price.Origin>{info?.salePrice || 0} / month</Price.Origin>
        </Price.Wrapper>
        <Price.IconWrapper>
          <Icons.Bed />
          <Icons.Bed />
        </Price.IconWrapper>
      </Price>
    </Card_item>
  )
};

export default Card;
