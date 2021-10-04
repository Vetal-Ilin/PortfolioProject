import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import ScrollToTop from './ScrollToTop/ScrollToTop';

import Home from './page/Home/Home';
import ProductsGroup from './page/ProductsGroup/ProductsGroup';
import Product from './page/Product/Product';


export default function App() {

  const [catalog, setCatalog] = useState([]);
  const [itemsCart, setItemsCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState('');
  const [recurringProducts, setRecurringProducts] = useState([]);
  const [productsGroupObj, setProductsGroupObj] = useState('')

  useEffect(() => {
    axios.get('https://61016c4b4e50960017c29e21.mockapi.io/items')
    .then(res => setCatalog(res.data))
    .catch(err => { 
      if (err.response) { 
        alert('Небольшие проблемы с сервером, попробуйде сделать запрос позже')
      } else if (err.request) { 
        alert('Небольшие проблемы с сервером, попробуйде сделать запрос позже')
      } else { 
        alert('Небольшие проблемы с сервером, попробуйде сделать запрос позже')
      }  
    })
            
    if (localStorage.getItem('listProductCart') !== null) {
        setItemsCart(JSON.parse(localStorage.getItem('listProductCart')))
    }

    if (localStorage.getItem('recurringProducts') !== null) {
      setRecurringProducts(JSON.parse(localStorage.getItem('recurringProducts')))
    }
  }, [])
  
  useEffect(() => {
    window.localStorage.setItem('listProductCart', JSON.stringify(itemsCart))
  }, [itemsCart])

  useEffect(() => {
    window.localStorage.setItem('recurringProducts', JSON.stringify(recurringProducts))
    setTotalPrice(Object.values(recurringProducts).reduce((sum, {price}) => sum +  +price, 0))
  }, [recurringProducts])

  const onClickProductCounterPlus = (obj) => {
    setRecurringProducts(prev => [...prev, obj])
  }

  const onAddToCart = (obj) => {     
    setItemsCart(prev => prev.find(item => item.id === obj.id) ? prev : [...prev, obj]);
  }

  const onPlus = (obj) => {
    onAddToCart(obj)
    onClickProductCounterPlus(obj); 
  }

  const onMinus = (obj) => {
    const arrayWithoutRepetition = recurringProducts.filter((item => item.id !== obj.id)); 
    const arrayRepetition = recurringProducts.filter((item => item.id === obj.id)); 
    const arrayRepetitionMinusOne = arrayRepetition.slice(0, arrayRepetition.length - 1); 
    const newRecurringProducts = arrayWithoutRepetition.concat(arrayRepetitionMinusOne);
    setRecurringProducts(newRecurringProducts)
  }

  const onRemoveItemToCart = (obj) => {
    setItemsCart(prev => prev.filter((item) => String(item.id) !== String(obj.id) ))
    setRecurringProducts(prev => prev.filter((item) => String(item.id) !== String(obj.id) ))
  }

  const listSubgroupProducts = [
    'БAЗЫ',
    'ТОПЫ',
    'ГЕЛЬ-ЛАКИ',
    'ГЕЛЬ-КРАСКИ'
  ];

  const onClickLinkSubgroup = (string) => {
    setProductsGroupObj(string)
  } 


  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
          <Switch>
            <Route path='/Product'>
                <Product
                  catalog={catalog}
                  itemsCart={itemsCart}
                  totalPrice={totalPrice} 
                  onRemoveItemToCart={onRemoveItemToCart}
                  recurringProducts={recurringProducts}
                  onPlus={onPlus}
                  onMinus={onMinus}
                  listSubgroupProducts={listSubgroupProducts}
                  onClickLinkSubgroup={onClickLinkSubgroup}
                />
            </Route>
            <Route path='/ProductsGroup' exact name='ProductsGroup'>
                <ProductsGroup 
                  catalog={catalog}
                  itemsCart={itemsCart}
                  totalPrice={totalPrice} 
                  onRemoveItemToCart={onRemoveItemToCart}
                  recurringProducts={recurringProducts}
                  onPlus={onPlus}
                  onMinus={onMinus}
                  listSubgroupProducts={listSubgroupProducts}
                  onClickLinkSubgroup={onClickLinkSubgroup}
                  productsGroupObj={productsGroupObj}
                />
            </Route>
            <Route path='/' exact name='Home'>
                <Home  
                  catalog={catalog}
                  itemsCart={itemsCart}
                  totalPrice={totalPrice}
                  recurringProducts={recurringProducts}
                  onClickProductCounterPlus={onClickProductCounterPlus}
                  onAddToCart={onAddToCart}
                  onPlus={onPlus}
                  onMinus={onMinus}
                  onRemoveItemToCart={onRemoveItemToCart}
                  listSubgroupProducts={listSubgroupProducts}
                  onClickLinkSubgroup={onClickLinkSubgroup}
                />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  )
}
