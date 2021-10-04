import React, {useState, useEffect} from 'react';
import PageLogoTransition from '../../components/PageLogoTransition/PageLogoTransition';
import MenuTop from '../../components/MenuTop/MenuTop';
import ProductСard from '../../components/ProductСard/ProductСard';
import SectionFooter from '../../components/SectionFooter/SectionFooter';
import SpinningIconLoading from '../../components/SpinningIconLoading/SpinningIconLoading';

export default function ProductsGroup({
  catalog, 
  itemsCart, 
  totalPrice, 
  onPlus, 
  onMinus, 
  onRemoveItemToCart, 
  recurringProducts, 
  listSubgroupProducts, 
  onClickLinkSubgroup,
  productsGroupObj
  }) {
 
  const [stateSubgroupProducts, setstateSubgroupProducts] = useState()

  useEffect(() => {
    setstateSubgroupProducts(JSON.parse(localStorage.getItem('subgroupProduct')))
  }, [])

  useEffect(() => {
    if(productsGroupObj) {
      setstateSubgroupProducts(productsGroupObj)
    }
  }, [productsGroupObj])

  const catalogElements = catalog.map(
    item => {
        if(item.subgroup === stateSubgroupProducts) {
          return <ProductСard className='products-group__list-cards-propducts__product-card' key={item.id} products={item} onPlus={onPlus} />
      }
    }
  )

  const listLinkNavBar = [];

    return (
        <div className='products-group'>
            <MenuTop 
                    listLinkNavBar={listLinkNavBar}
                    itemsCart={itemsCart}
                    totalPrice={totalPrice} 
                    onRemoveItemToCart={onRemoveItemToCart}
                    recurringProducts={recurringProducts}
                    onPlus={onPlus}
                    onMinus={onMinus}
                    listSubgroupProducts={listSubgroupProducts}
                    onClickLinkSubgroup={onClickLinkSubgroup}
                    >
                <PageLogoTransition to='/' />
            </MenuTop>
            <section className='products-group__header'> 
                <h2>{stateSubgroupProducts}</h2>
            </section>
            <section className='products-group__list-cards-propducts'>
                <div className='container'>
                   {Object.keys(catalog).length !== 0  ? catalogElements : <SpinningIconLoading className='products-group__list-cards-propducts__spinning-icon-loading' />}
                </div>
            </section>
            <section className='products-group__section-footer'>
                <SectionFooter />
            </section>
        </div>
    )
}
