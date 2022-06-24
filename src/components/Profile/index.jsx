import React from "react";
import { useMutation, useQueries, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { Button } from "../Generic";
import Card from "./Card";
import { Container, Table, WrapTitle, TableData, Title, Icons } from "./style";
import edit from "../../assets/imgs/edit.png";

import deleteImg from "../../assets/imgs/delete.png";

export const Profile = () => {

  const navigate = useNavigate()

  const { data } = useQuery([], () => {
    return fetch('https://houzing-app.herokuapp.com/api/v1/houses/me', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }).then((res) => res.json())
  }, {
    onSuccess: (res) => {
      console.log(res);
    }
  })

  const {mutate}= useMutation((id)=>{
    return fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${id}`)
  })



  const onEdit = (id) => {
    console.log(id);
    navigate(`/profile/add/:${id}`)
  }
  console.log(data, 'data');
  return (
    <Container>
      <WrapTitle>

        <h1 className="title">My properties</h1>
        <Button onClick={() => navigate('/profile/add')} type={'primary'} width={'80px'}>Add House</Button>
      </WrapTitle>
      <Table>

        <Table.List title>
          <Title>Listing Title</Title>
          <Title>Date Published</Title>
          <Title>Status</Title>
          <Title>View</Title>
          <Title>Action</Title>
        </Table.List>
        {data?.data?.map((value) => {
          return (

            <Table.List>
              <Card info={value} />
              <TableData>Date Published</TableData>
              <TableData>{value.status ? 'pending' : 'no pending'}</TableData>
              <TableData>View</TableData>
              <TableData>
                <Icons>

                  <Icons.edit onClick={()=>onEdit(value.id)} src={edit} />
                  <Icons.delete src={deleteImg} />
                </Icons>

              </TableData>
            </Table.List>
          )
        })}

      </Table>
    </Container>
  )
};

export default Profile;
