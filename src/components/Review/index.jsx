import React from "react";
import { Container, Flex, Grid, Input, Text, Title } from "./style";
import { Rate } from 'antd';
export const Review = () => {
  return (
    <Container>
      <Title>Write a Review</Title>
    <Grid>
      <Flex>
      <Text>Cleanliness</Text>
      <Rate />
      </Flex>
      <Flex>
      <Text>Cleanliness</Text>
      <Rate />
      </Flex>
      <Flex>
      <Text>Cleanliness</Text>
      <Rate />
      </Flex>
      <Flex>
      <Text>Cleanliness</Text>
      <Rate />
      </Flex>
      <Flex>
      <Text>Cleanliness</Text>
      <Rate />
      </Flex>
      <Flex>
      <Text>Cleanliness</Text>
      <Rate />
      </Flex>
    </Grid>

    <Input type="name" id="name" name="name" />
    <Input type="email" id="email" name="email" />

    </Container>
  )
};

export default Review;
