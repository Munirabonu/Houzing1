import React from "react";
import { Advanced, Container, Icon, Section } from "./style";
import { Popover } from "antd";
import { Button, Input } from "../Generic";

export const Filter = () => {
  const advancedSearch = (
    <Advanced>
      <Advanced.Title>Address</Advanced.Title>
      <Section>
        <Input placeholder="Country" />
        <Input placeholder="Region" />
        <Input placeholder="City" />
        <Input placeholder="Zip Code" />
      </Section>
      <Advanced.Title>Apartment info</Advanced.Title>
      <Section>
        <Input placeholder="Address" />
        <Input placeholder="House name" />
        <Input placeholder="Rooms" />
      </Section>
      <Advanced.Title>Price</Advanced.Title>
      <Section>
        <Input placeholder="Min price" />
        <Input placeholder="Max price" />
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
