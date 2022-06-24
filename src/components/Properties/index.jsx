import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useNavigate } from "react-router-dom";
import UseReplace from "../../hook/useReplace";
import Filter from "../Filter";
import Card from "../Generic/Card";
import { Body, Container, Wrapper } from "./style";
import useSearch from '../../hook/useSearch';
export const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = () => {
  const [title, setTitle] = useState("Properties")
  const [datas, setDatas] = useState([])
  const [state, setState] = useState()
  const { search } = useLocation();
  const query = useSearch()
  const navigate=useNavigate()

  useEffect(()=>{
    if(!query.get('category_id')){
      setTitle('Properties')
    }
  },[query.get('category_id')])

  const {isLoading,isRefetching}= useQuery(
    ['getHouse'],
    () => {
      return fetch('https://houzing-app.herokuapp.com/api/v1/categories',{
        method:'GET',
        headers:{
          Authorization:`Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        console.log(res, query('category_id'), "title");
        setTitle(res?.data?.name)
      }

    }
  );

  useQuery(['getHomeList', search],
    () =>
      fetch(`https://houzing-app.herokuapp.com/api/v1/houses/list${search || "?"}`).then((res) => res.json())
    ,
    {
      onSuccess: (res) => {
        console.log(res.data, 'res');
        setDatas(res?.data || [])
      }
    }
  );
  const onSelect = (id) => {
    navigate(`/properties/:${id}`);
};
 



  return <Container>
    <Filter />
    <Wrapper>
      {/* <div className="title center">{isLoading || isRefetching ? <h1>Loading...</h1>: {title}}</div> */}
      <div className="description center">siz orzu qilgan uy</div>
    </Wrapper>
    <Body>
      {datas.map((value) => {
        return (
          <Card info={value} onClick={()=>onSelect(value?.id)}/>
        )
      })}
    </Body>
  </Container>;
};

export default Properties;
