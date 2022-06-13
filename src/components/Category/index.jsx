import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import UseReplace from "../../hook/useReplace";
import Card from "./Card";
import { Cards, Container, Wrapper } from "./style";

export const Category = () => {
  const [state,setState]=useState([]);
  const navigate=useNavigate()

  const onSelect=(value) => {
    console.log(value,'on select');
    navigate(`/properties?category_id=${value}`)
  }
  
  useQuery(
    "",
    () => {
      return fetch('https://houzing-app.herokuapp.com/api/v1/categories').then((res)=>res.json());
    },
    {
      onSuccess:(res)=>{
        let list = res?.data?.map((value,index)=>{
          return <Card onClick={()=>onSelect(index+1)}  margin title={value} />
        })
        setState(list)
        console.log(list,'list categpry');
        console.log(res,'res category');
      }
    
    }
    );
    const slider = useRef();
    console.log(state);
  return (

    <Container className="nocopy">
      <div className="title center">Categories</div>
      <div className="description center">Siz orzu qilgan uy</div>
      <Wrapper>
        <Cards>
          <AliceCarousel
          arrows={false}
          ref={slider}
          autoWidth
          mouseTracking
          responsive={
            { 
              0 : { 
                  elementlar : 1 , 
              } , 
              1024 : { 
                  elementlar : 3 
              } 
            }
          }
            items={state}
           />
           
        </Cards>
      </Wrapper>
    </Container>
  )
};

export default Category;
