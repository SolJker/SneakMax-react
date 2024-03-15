import React, { Component } from 'react'
import { FaShoppingBasket } from "react-icons/fa";
import Order from './Order';

export class Header extends Component {

  constructor(props){
    super(props)
    this.state  = {
      cartState: false
    }

    this.cartOpen = this.cartOpen.bind(this);

  }

  cartOpen() {
    this.setState({cartState: !this.state.cartState})
    console.log(this.state.cartState)
  }

  render() {
    let summa = 0
    this.props.orders.forEach(el => summa += Number.parseFloat(el.price) )
    const style = {color: "white", width: "20px", heigth: "20px", cursor: "pointer"}
    return (
      <header>
        <div>
          <div className='header_heading'>SneakMax</div>
          <ul>
            <li>Каталог</li>
            <li>О нас</li>
            <li>Подбор товара</li>
            <li>Наша команда</li>
            <li>Доставка и оплата</li>
            <li>Контакты</li>
            <li className='li_cart'>Корзина</li>
          </ul>
          <FaShoppingBasket style={style} onClick={this.cartOpen} />

          {this.state.cartState && (
            <div className='cart'>
              {this.props.orders.map((el) =>(
                <Order key={el.id} item={el} onDelete={this.props.onDelete} />
              ))}
              <p className='summa'>Сумма: {summa} р</p>
            </div>
          )}
        </div>
      </header>
    )
  }
}

export default Header