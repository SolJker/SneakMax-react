import React, { Component } from 'react'
import Item from './Item'

export class Items extends Component {
  render() {
    return (
      <div className='items'>
        {this.props.items.map(el => (<Item item={el} addTo={this.props.addTo} onShow={this.props.onShow} />))}
        <button>Показать еще</button>
      </div>
    )
  }
}

export default Items
