import React, { Component } from 'react'
import { FaTrashAlt } from "react-icons/fa";

export class Order extends Component {
  render() {
    return (
      <div className='order'>
        <img src={'../img/' + this.props.item.img} />
        <h2>{this.props.item.title}</h2>
        <b>{this.props.item.price} р</b>
        <FaTrashAlt className='del_orders' onClick={() => this.props.onDelete(this.props.item.id)} />
      </div>
    )
  }
}

export default Order