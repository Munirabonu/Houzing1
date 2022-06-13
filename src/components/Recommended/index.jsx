import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import Card from "../Generic/Card";
import { Container, Wrap } from "./style";

export const Recommended = () => {
  const [data,setData]=useState([])

const slider=useRef()

  useQuery(
    ['test'],
    () => {
      return fetch('https://houzing-app.herokuapp.com/api/v1/houses/list').then((res) => res.json())
    },
    {
      onSuccess: 
        (res)=>{
          console.log(res);
          setData(res?.data,'set');
          let list =res?.data.map((res)=>
          res );
          console.log(list,'lis');
          // <Card info={data} />
        }
        
      
    }
  )


  const items = [
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
    <Card />,
  ]

  return (
    <Container>
      <div className="title center">Recommended</div>
      <div className="center description">Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.</div>
      <Wrap>
        <AliceCarousel
          arrows={false}
          mouseTracking
          ref={slider}
          responsive={
            {
              0: {
                items: 1,
              },
              1024: {
                items: 3
              }
            }
          } items={items} />
      </Wrap>
    </Container>
  )
};

export default Recommended;
