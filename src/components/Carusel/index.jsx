import { Card, Carousel } from "antd";
import React, { useRef } from "react";
import { CarouselWrap, Container, Content, Icon, Wrap } from "./style";

export const Carusel = () => {

  const slider =useRef();

  return <Container>
    <Icon.Right left='true' onClick={()=>slider.current?.prev()} />
    <Icon.Right onClick={()=>slider.current?.next()}/>
  
    <Carousel ref={slider}>
      <Wrap>
        <Content>
          <Card>
            <h1>Skyper Pool Partment 1</h1>
            <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
          </Card>
        </Content>
      </Wrap>
      <Wrap>
        <Content>
          <Card>
            <h1>Skyper Pool Partment 2</h1>
            <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
          </Card>
        </Content>
      </Wrap>
      <Wrap>
        <Content>
          <Card>
            <h1>Skyper Pool Partment 3</h1>
            <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
          </Card>
        </Content>
      </Wrap>
      <Wrap>
        <Content>
          <Card>
            <h1>Skyper Pool Partment 4</h1>
            <p>112 Glenwood Ave Hyde Park, Boston, MA</p>
          </Card>
        </Content>
      </Wrap>
    </Carousel>


  </Container>;
};

export default Carusel;
