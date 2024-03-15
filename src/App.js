import './App.css';
import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Items from './Components/Items';
import ShowFullItem from './Components/ShowFullItem';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          img: 'shoes.jpg',
          title: `Кроссовки Nike Air Force 1 '07 QS`,
          category: '',
          price: '11000'
        },
        {
          id: 2,
          img: 'shoes2.jpg',
          title: `Кроссовки Nike Air Force 1 '07 QS`,
          category: '',
          price: '15990'
        },
        {
          id: 3,
          img: 'shoes3.jpg',
          title: `Кроссовки Nike Air Force 1 '07 QS`,
          category: '',
          price: '19990'
        },
        {
          id: 1,
          img: 'shoes.jpg',
          title: `Кроссовки Nike Air Force 1 '07 QS`,
          category: '',
          price: '11000'
        },
        {
          id: 2,
          img: 'shoes2.jpg',
          title: `Кроссовки Nike Air Force 1 '07 QS`,
          category: '',
          price: '15990'
        },
        {
          id: 3,
          img: 'shoes3.jpg',
          title: `Кроссовки Nike Air Force 1 '07 QS`,
          category: '',
          price: '11000'
        },
        {
          id: 1,
          img: 'shoes.jpg',
          title: `Кроссовки Nike Air Force 1 '07 QS`,
          category: '',
          price: '11000'
        },
        {
          id: 2,
          img: 'shoes2.jpg',
          title: `Кроссовки Nike Air Force 1 '07 QS`,
          category: '',
          price: '15990'
        },
        {
          id: 3,
          img: 'shoes3.jpg',
          title: `Кроссовки Nike Air Force 1 '07 QS`,
          category: '',
          price: '11000'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.addToCart = this.addToCart.bind(this)
    this.deleteFromCart = this.deleteFromCart.bind(this)
    this.showItem = this.showItem.bind(this)
  }

  addToCart(item) {
    this.setState({ orders: [...this.state.orders, item]}, () => {
      console.log(this.state.orders)
    })
  }

  deleteFromCart(id){
    this.setState({ orders: this.state.orders.filter(el => el.id !== id)})
  }

  showItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  render(){
    return (
      <div className="App">
        <Header orders={this.state.orders} onDelete={this.deleteFromCart} />
        <Hero />
        <Items items={this.state.items} addTo={this.addToCart} onShow={this.showItem} />

        {this.state.showFullItem && <ShowFullItem addTo={this.addToCart} onShow={this.showItem} item={this.state.fullItem} />}

      </div>
    );
  }
  
}
  


export default App;
