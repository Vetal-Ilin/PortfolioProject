import React, {useEffect, useState} from 'react';
import MenuTop from '../../components/MenuTop/MenuTop';
import IconLinkBack from '../../components/IconLinkBack/IconLinkBack';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import DescriptionProductСard from '../../components/DescriptionProductСard/DescriptionProductСard';
import SectionFooter from '../../components/SectionFooter/SectionFooter';
import catalogProduct from '../../../catalogProduct';
import BackgroundContentLoading from '../../components/BackgroundContentLoading/BackgroundContentLoading';

export default function Product({
  itemsCart, 
  totalPrice, 
  onRemoveItemToCart, 
  recurringProducts,  
  onPlus, 
  onMinus, 
  listSubgroupProducts,
  onClickLinkSubgroup}) {
  
  const listLinkNavBar = [];

  const [product, setProduct] = useState([]);
  const [productText, setProductText] = useState([]);
  
  useEffect(() => {
    setProduct(JSON.parse(localStorage.getItem('idUrl')))
  }, []);

  useEffect(() => {
    setProductText(catalogProduct.find(item => item.id === product.id))
  }, [product])

  return (
    <section className='product'>
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
        <IconLinkBack/>
      </MenuTop>
      <div className='product__header'>
        <div className='container'>
            <PhotoGallery products={product} />
            <div className='product__header__card'>
              <div className='product__header__card__wrapper'>
                <div className='product__header__card__wrapper__title'>
                    {Object.keys(product).length !== 0  ? <h2>{product.title}</h2> : <BackgroundContentLoading />}
                </div>
                <div className='product__header__card__wrapper__subgroup'>
                  {Object.keys(product).length !== 0   ? <p>Группа товаров: {product.subgroup}</p> : <BackgroundContentLoading />}                  
                </div>
                <div className='product__header__card__wrapper__shade'>
                  {Object.keys(product).length !== 0   ? <p>Оттенок: красный</p> : <BackgroundContentLoading />}                    
                </div>
                <div className='product__header__card__wrapper__description-product-card'>
                  <DescriptionProductСard products={product} onPlus={onPlus} />
                </div> 
              </div>
              <div className='product__header__card__structure'>
                <p>Состав:</p>
                <p>
                    {productText ? productText.structure : null}
                </p>
              </div>
            </div>
        </div>
      </div>
      <div className='product__text'>
        <div className='container'>
            <div className='product__text__description'>
                <p>Описание</p>
                <p>
                  {productText ? productText.description : null}
                </p>
            </div>
            <div className='product__text__instructions'>
                <p>Инструкция по применению</p>
                <p>
                  {productText ? productText.application : null}
                </p>
            </div>
        </div>
      </div>
      <SectionFooter />
    </section>
  )
}