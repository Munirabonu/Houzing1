import React, { useState } from "react";
import { Advanced, Container, Icon, Section } from "./style";
import { Popover, Select } from "antd";
import { Button, Input } from "../Generic";
import { useNavigate } from "react-router-dom";
import UseReplace from "../../hook/useReplace";
import { useQuery } from "react-query";
import UseSearch from "../../hook/useSearch";

export const Filter = () => {

  const query = UseSearch()
  const [title,setTitle]=useState(query.get('category_id'))

  const navigate = useNavigate()

  const {Option}=Select
  const onChange = ({ target }) => {
    const { value, name } = target
    console.log(value, name);
    navigate(`${UseReplace(name, value)}`)

  }

  const data = useQuery(
    "hetHouses",
    () => {
      return fetch('https://houzing-app.herokuapp.com/api/v1/categories/list', {
        method: 'get',
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json());
    },
    {

      onSuccess: (res) => {
        console.log(res, 'res filter');
      }
    }
  )
  const onSelect = (id) => {
    setTitle(id);
    navigate(`properties/${UseReplace('category_id',id)}`)
  }
  // console.log(data.data.data,'data filter');
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input onChange={onChange} name='country' placeholder="Country" />
        <Input onChange={onChange} name='region' placeholder="Region" />
        <Input onChange={onChange} name='city' placeholder="City" />
        <Input onChange={onChange} name='zip_code' placeholder="Zip Code" />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input onChange={onChange} placeholder="Address" />
        <Input onChange={onChange} placeholder="House name" />
        <Input onChange={onChange} placeholder="Rooms" />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input onChange={onChange} placeholder="Min price" />
        <Input onChange={onChange} placeholder="Max price" />
        <Select
          name=''
          id=''
          defaultValue={"tessr"}
          style={{width:'300px'}}
          onChange={onSelect}
          value={Number(title)}
        >
          {data?.data?.data?.map((value)=>{
            return <Option value={value.id}>{value?.name} </Option>
          })}
        </Select>
      </Section>
      <Section>
        {/* <Button width="131px" ml={20} type="secondary"> */}
        {/* Cancel */}
        {/* </Button> */}
        <Button width="131px" ml={20} type="primary">
          Search
        </Button>
      </Section>
    </Advanced>
  );
  return (
    <Container>
      <Input
        pl={"50px"}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      >
        <Icon.Home />
      </Input>
      <Popover placement="bottomRight" content={advancedSearch} trigger="click">
        <Button width={"131px"} type={"secondary"}>
          <Icon.Setting /> Advanced
        </Button>
      </Popover>
      <Button width={"131px"} type={"primary"}>
        <Icon.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
