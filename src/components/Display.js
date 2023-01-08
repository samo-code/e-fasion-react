import React, { Component } from 'react'
import prod1 from '../imgs/men shirt5.jpeg'
import prod2 from '../imgs/men shirt2.jpeg'
import prod3 from '../imgs/men shirt3.jpeg'
import prod4 from '../imgs/men shirt4.jpeg'
import './dis.css'

export default class Display extends Component {
  render() {
    return (
        <>
        <div className='container'>
      <div className='real'>
            <img src={prod1} alt="prod1" />
            <img src={prod2} alt="prod2" />
            <img src={prod3} alt="prod3" />
            <img src={prod4} alt="prod4" />
      </div>
      </div>
      </>
    )
  }
}
