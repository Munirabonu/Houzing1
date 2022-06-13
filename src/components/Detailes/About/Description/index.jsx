import React from "react";
import { Container } from "./style";

export const Sample = () => {
  return (<Container>
    
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
  </Container>)
};

export default Sample;
