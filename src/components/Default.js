import React, { Component } from 'react'
import {Link} from "react-router-dom"
import { Container ,Text,Href,Title,Paragraph} from '../styles/defaultStyle'

export default class Def extends Component {
  render() {
    return (
        <>
      <Container>
        <Title>Oops! Page not found</Title>
        <Text>404</Text>
        <Paragraph>We can't find the page you're looking for.</Paragraph>
        <Href><Link to="/">Go back to shopping.</Link></Href>

      </Container>
      </>
    )
  }
}