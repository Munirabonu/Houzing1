import React from "react";
import { useState } from "react";
import { useMutation } from "react-query";
import { Chexbox } from "../Generic";
import Button from "../Generic/Button";
import { Container, Input, Remember, Label, Link, Title, Wrapper } from "./style";

export const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = () => {
    console.log(email, password);
  }

  const { mutate } = useMutation(() => {
    return fetch(`https://houzing-app.herokuapp.com//api/public/auth/login`, {
      method: 'POST',
      headers: {
        "Content-Type": 'Application/json',
      
      },
      body: JSON.stringify({
        email,
        password
      })
    }).then((res)=>res.json())
  })

  return (

    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <div>
          <Label>Login</Label>
          <Input onChange={({ target: { value } }) => setEmail(value)} type='email' value={email} id="name" placeholder="Email" />
        </div>
        <Input type='password' id="password" value={password} onChange={({ target: { value } }) => setPassword(value)} placeholder="Password" />
        <Remember>
          <Chexbox>Remmeber me</Chexbox>
          <Link>Forgot</Link>
        </Remember>
        <Button type="primary" onClick={onSubmit}>Login</Button>
      </Wrapper>
    </Container>
  )
};

export default SignIn;
