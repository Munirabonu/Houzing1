import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Button, Container, Descrpition, Document, Form, Grid, Icons, Img, ImgWrap, Info, Input, Label, Location, Price, PriceWrap, Property, TextArea, Title, WrapDes } from "./style";
import img from '../../assets/imgs/uy1.png';
import Map from "./About/Map";
import Carusel from "../Carusel";
import { Category } from "../Category";
import Recommended from "../Recommended";
import Review from "../Review";


export const Detalies = () => {
  const { id } = useParams();

  console.log(id);


  useQuery('', () => {
    return fetch(`https://houzing-app.herokuapp.com/api/v1/houses/${id}`
      , {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      }).then((res) => res.json())
  },
    {
      onSuccess: (res) => { console.log(res) },
      onError: (err) => { console.log(err) }
    }
  );

  return (
    <Container>
      <Img></Img>
      <WrapDes>
        <div>
          <Title>
            <div>
              <div className="title">
                Luxury Family Loft by Victoria Park
              </div>
              <div className="descrption">Quincy St, Brooklyn, NY, USA</div>
            </div>
            <Title.IconCon>
              <Icons.Wrapper>
                <Icons.Bed />
                <Info.Text>Beds</Info.Text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Love />
                <Info.Text>love</Info.Text>
              </Icons.Wrapper>
            </Title.IconCon>
          </Title>
          <PriceWrap>
            <Title.IconCon>
              <Icons.Wrapper>
                <Icons.Bed />
                <Info.Text>Beds</Info.Text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Love />
                <Info.Text>love</Info.Text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Bed />
                <Info.Text>Beds</Info.Text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Love />
                <Info.Text>love</Info.Text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Bed />
                <Info.Text>Beds</Info.Text>
              </Icons.Wrapper>
              <Icons.Wrapper>
                <Icons.Love />
                <Info.Text>love</Info.Text>
              </Icons.Wrapper>
            </Title.IconCon>
            <Price>
              <Price.small>$2,800/mo</Price.small>
              <Price.text>$7,500/mo</Price.text>
            </Price>
          </PriceWrap>

          <Descrpition>
            <div className="title">Description</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima eum, odio inventore laudantium enim ipsum adipisci, possimus quae sapiente error animi officiis, expedita ipsa? Itaque deleniti, mollitia repudiandae, iusto corporis natus cupiditate sunt dicta, quam quae provident dolores veniam ipsum nihil sit. Quidem temporibus consequatur dolorem, <br /> <br /> nesciunt voluptatem possimus. Voluptatibus.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, maxime facere, nam autem praesentium aut porro corporis, odio enim fugit accusantium dolores sapiente architecto aperiam eveniet minus est. Veritatis, sint ipsam rerum dolorem minima perspiciatis dignissimos dolore numquam culpa possimus ducimus, odit laudantium expedita at eligendi a unde deleniti consequatur!

            </p>
            <Descrpition.Link>Show more</Descrpition.Link>
          </Descrpition>
        </div>

        <Form>
          <ImgWrap>
            <ImgWrap.Img src={img} />
            <ImgWrap.Text>
              <p>Darrel Steward</p>
              <small>(123)456-7890</small>
            </ImgWrap.Text>
          </ImgWrap>
          <Input type='text' placeholder="Name" />
          <Input type='tel' placeholder="Phone" />
          <Input type='email' placeholder="Email" />
          <Label>Massge</Label>
          <TextArea>Hello, I am interested in [New Apartment]</TextArea>
          <input type="checkbox" name="agree" id="agree" />
          <lebel>By submitting this form I agree to Terms of Use</lebel>
          <Button>Send request</Button>
        </Form>
      </WrapDes>
      <Document className="title">Documents</Document>
      <Location>
        <Location.Title>Location</Location.Title>
        <Location.grid>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>

        </Location.grid>
      </Location>
      <Property>
        <Location.Title>Location</Location.Title>
        <Location.grid>
          <Location.name>Property ID: <span>HZ27</span></Location.name>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>
          <Location.name>Address: <span>329 Queensberry Street</span></Location.name>
        </Location.grid>
        <Map />
      </Property>
      <Property>
        <Grid>
          <Icons.Wrapper>

            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
          <Icons.Wrapper>
            <Icons.Bed />
            <Info.Text>Beds</Info.Text>
          </Icons.Wrapper>
        </Grid>
      </Property>
      <Review />
      <Recommended />
    </Container>
  )
};

export default Detalies;