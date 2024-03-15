import React, { Component } from 'react'
import { ImCross } from "react-icons/im";

export class ShowFullItem extends Component {
  render() {
    const style = {cursor: "pointer"}
    return (
      <div className='full_item'>
        <div className='full_item_desc'>
          <div><img src={'../img/' + this.props.item.img} /></div>
          <div className='full_item_text'>
           <ImCross style={style} onClick={() => this.props.onShow(this.props.item)} className='close_item' />
           <h2>{this.props.item.title}</h2>
           <b>{this.props.item.price} р</b>
           <div onClick={() => this.props.addTo(this.props.item)} className='add_item' >Добавить в корзину</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem