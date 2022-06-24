import React from "react";
import { Col, Container, Wrap, Input, TextArea, Title } from "./style";
import Map from '../../Detailes/About/Map'
import Checkbox from "../../Generic/Checkbox";
import { useQuery, useMutation } from "react-query";
import { Button } from "../../Generic";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {  message } from 'antd';
export const AddHouse = () => {

  const [title, setTitle] = useState('')
  const [description, setDescriptione] = useState('')
  const [categoryId, setCategoryId] = useState('')
  const [status, setStatus] = useState(true)
  const [area, setArea] = useState()
  const [beds, setBeds] = useState()
  const [bath, setBath] = useState()
  const [garages, setGarages] = useState()
  const [room, setRoom] = useState()
  const [price, setPrice] = useState()
  const [latidude, setLatidude] = useState()
  const [logtitude, setLogtitude] = useState()
  const [regions, setRegions] = useState()
  const [yearBulid, setYearBulid] = useState()
  const [salePrice, setSalePrice] = useState()
  const [garden, setGarden] = useState()
  const [school, setSchool] = useState()
  const [parking, setParking] = useState()
  const [url, setUrl] = useState()
  const navigate = useNavigate()



  const id = useParams();

  const { mutate } = useMutation(() =>
    fetch('https://houzing-app.herokuapp.com/api/v1/houses', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        "address": "Toshkent",
        "attachments": [
          {
            "imgPath": url
          }
        ],
        "categoryId": categoryId,
        "city": "Toshkent",
        "componentsDto": {
          "additional": "string",
          "airCondition": true,
          "courtyard": true,
          "furniture": true,
          "gasStove": true,
          "internet": true,
          "tv": true
        },
        "country": "Uzbekistan",
        "description": description,
        "favorite": true,
        "homeAmenitiesDto": {
          "additional": "string",
          "busStop": true,
          "garden": garden,
          "market": true,
          "park": true,
          "parking": parking,
          "school": school,
          "stadium": true,
          "subway": true,
          "superMarket": true
        },
        "houseDetails": {
          "area": area,
          "bath": bath,
          "beds": beds,
          "garage": garages,
          "room": room,
          "yearBuilt": yearBulid
        },
        "locations": {
          "latitude": latidude,
          "longitude": logtitude
        },
        "name": title,
        "price": price,
        "region": regions,
        "salePrice": salePrice,
        "status": status,
        "zipCode": "678"
      })
    }).then((res) => res.json())
  )
  const { mutate: update } = useMutation((id) =>
  id && 
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        "address": "Toshkent",
        "attachments": [
          {
            "imgPath": url
          }
        ],
        "categoryId": categoryId,
        "city": "Toshkent",
        "componentsDto": {
          "additional": "string",
          "airCondition": true,
          "courtyard": true,
          "furniture": true,
          "gasStove": true,
          "internet": true,
          "tv": true
        },
        "country": "Uzbekistan",
        "description": description,
        "favorite": true,
        "homeAmenitiesDto": {
          "additional": "string",
          "busStop": true,
          "garden": garden,
          "market": true,
          "park": true,
          "parking": parking,
          "school": school,
          "stadium": true,
          "subway": true,
          "superMarket": true
        },
        "houseDetails": {
          "area": area,
          "bath": bath,
          "beds": beds,
          "garage": garages,
          "room": room,
          "yearBuilt": yearBulid
        },
        "locations": {
          "latitude": latidude,
          "longitude": logtitude
        },
        "name": title,
        "price": price,
        "region": regions,
        "salePrice": salePrice,
        "status": status,
        "zipCode": "678"
      })
    }).then((res) => res.json())
  )

    const submit = () => {
      console.log('submit');
      if(id){
        update(id,{
          onSuccess:(res)=>{
            if(res?.success){
              navigate('/profile')
              message.info('update yangilandi')
            }
          }
        })         
    }
    
        mutate('', {
        onSuccess: (res) => {
          console.log(res, 'add muta');
        }
      })
      console.log('submit', '');
      navigate('/profile')
    
  }

    const onChange = (e) => {
      console.log(e.target.value);
    }
    const onChangeCheckbox = (e) => {
      setGarden(e.target.checked);
    };

    return <Container>
      <h1 className="title">Add new property</h1>
      <Wrap>
        <Title>Contact information</Title>
        <Col col2>
          <Input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Property title*" name="title" id="title" required />
          <Input type="text" onChange={(e) => onChange(e)} placeholder="Property title*" name="title" id="title" required />
        </Col>
        <Col>
          <TextArea onChange={(e) => onChange(setDescriptione(e.target.value))} placeholder="Property Description*" row='30' />
        </Col>
      </Wrap>
      <Wrap>
        <Title>Additional</Title>
        <Col col3>
          <Input onChange={(e) => setCategoryId(e.target.value)} type="text" placeholder="Property id" name="title" id="title" required />
          <Input onChange={(e) => onChange(e)} type="text" placeholder="Property " name="title" id="title" required />
          <Input onChange={(e) => onChange(e)} type="text" placeholder="Property status" name="title" id="title" required /> {/* status select bolishi kk true or false*/}
          <Input onChange={(e) => onChange(e)} type="text" placeholder="Property title*" name="title" id="title" required />
          <Input onChange={(e) => onChange(e)} type="text" placeholder="Property title*" name="title" id="title" required />
          <Input onChange={(e) => setRoom(e.target.value)} type="text" placeholder="Room" name="title" id="title" required />
          <Input onChange={(e) => onChange(e)} type="text" placeholder="Property title*" name="title" id="title" required />
          <Input onChange={(e) => setBeds(e.target.value)} type="text" placeholder="Beds" name="title" id="title" required />
          <Input onChange={(e) => setBath(e.target.value)} type="text" placeholder="Baths" name="title" id="title" required />
          <Input onChange={(e) => setGarages(e.target.value)} type="text" placeholder="Garages" name="title" id="title" required />
          <Input onChange={(e) => (e) => setYearBulid(e)} type="text" placeholder="Year Bulid" name="title" id="title" required />
          <Input onChange={(e) => onChange(e)} type="text" placeholder="internetdagi img manzilni joylashtiring https:" name="title" id="title" required />
          <Input onChange={(e) => setArea(e.target.value)} type="text" placeholder="Home area (sqft)" name="title" id="title" required />

        </Col>
      </Wrap>
      <Wrap>
        <Title>Select Energy Class</Title>

        <Col col2>
          <Input onChange={(e) => onChange(e)} type="text" placeholder="Property title*" name="title" id="title" required />
          <Input onChange={(e) => onChange(e)} type="text" placeholder="Property title*" name="title" id="title" required />
          <Input onChange={(e) => onChange(e)} type="text" placeholder="Property title*" name="title" id="title" required />
          <Input onChange={(e) => onChange(e)} type="text" placeholder="Property title*" name="title" id="title" required />
        </Col>
      </Wrap>
      <Wrap>
        <Title>Select Energy Class</Title>

        <Col col2>
          <Input onChange={(e) => setPrice(e.target.value)} type="text" placeholder="Price ($)" name="title" id="title" required />
          <Input onChange={(e) => setSalePrice(e)} type="text" placeholder="Sale Price" name="title" id="title" required />
        </Col>
        <Col>
          <Input type="text" placeholder="Regions" onChange={(e) => setRegions(e)} name="title" id="title" required />
          <Map />
        </Col>
        <Col col2>
          <Input type="text" placeholder="Latidude" onChange={(e) => setLatidude(e)} name="title" id="title" required />
          <Input type="text" placeholder="Logtitude" onChange={(e) => setLogtitude(e)} name="title" id="title" required />
        </Col>
      </Wrap>
      <Wrap>
        <Title>Select Energy Class</Title>
        <Col col4>
          <Checkbox onChange={(e) => setGarden(e.target.checked)}>Air conditioning</Checkbox>
          <Checkbox onChange={(e) => setSchool(e.target.checked)}>Schools</Checkbox>
          <Checkbox onChange={(e) => setParking(e.target.checked)}>Parking</Checkbox>
          <Checkbox>Waterfront</Checkbox>
          <Checkbox>Barbeque</Checkbox>
          <Checkbox>Microwave</Checkbox>
          <Checkbox>Fireplace</Checkbox>
          <Checkbox>Parking</Checkbox>
          <Checkbox>Dryer</Checkbox>
          <Checkbox>Outdoor Shower</Checkbox>
          <Checkbox>Pets Allowed</Checkbox>
          <Checkbox>Doorman</Checkbox>
          <Checkbox>Gym</Checkbox>
          <Checkbox>Refrigerator</Checkbox>
          <Checkbox>Unit Washer/Dryer</Checkbox>
          <Checkbox>Central Heating</Checkbox>
          <Checkbox>Laundry</Checkbox>
          <Checkbox>Stunning views</Checkbox>
          <Checkbox>Onsite Parking</Checkbox>
          <Checkbox>Cleaning Service</Checkbox>
        </Col>
      </Wrap>
      <Wrap>
        <Title>Select Energy Class</Title>
        <Col col2>
          <Input type="text" placeholder="Property title*" name="title" id="title" required />
          <Input type="text" placeholder="Property title*" name="title" id="title" required />

        </Col>
      </Wrap>

      <Button width={'280px'} ml={'auto'} type={'primary'} onClick={() => submit()}>Submit</Button>
    </Container>;
  };

  export default AddHouse;
