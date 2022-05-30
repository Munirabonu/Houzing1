import React, { useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import UseReplace from "../../hook/useReplace";
import HouseCard from "../Card";
import Filter from "../Filter";
import Card from "../Generic/Card";
import { Body, Container, Wrapper } from "./style";

export const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {

  const [datas, setDatas] = useState([])

  // const {request} =UseReplace();
  const { search } = useLocation();


  useQuery(['getHomeList', search],
    () =>
      fetch(`https://houzing-app.herokuapp.com/api/v1/houses/list${search || "?"}`).then((res) => res.json())
    ,
    {
      onSuccess: (res) => {
        console.log(res.data, 'res');
        setDatas(res?.data)
      }
    }
  );


  return <Container>
    <Filter />
    <Wrapper>
      <div className="title center">Properties</div>
      <div className="description center">siz orzu qilgan uy</div>
    </Wrapper>
    <Body>
      {datas.map((value) => {
        return (
          <HouseCard info={value} />
        )
      })}
    </Body>
  </Container>;
};

export default Properties;
