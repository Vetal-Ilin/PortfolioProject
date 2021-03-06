import React, {useEffect, useState} from 'react';
import MenuTop from '../../components/MenuTop/MenuTop';
import IconLinkBack from '../../components/IconLinkBack/IconLinkBack';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import DescriptionProductŠ”ard from '../../components/DescriptionProductŠ”ard/DescriptionProductŠ”ard';
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
                  {Object.keys(product).length !== 0   ? <p>ŠŃŃŠæŠæŠ° ŃŠ¾Š²Š°ŃŠ¾Š²: {product.subgroup}</p> : <BackgroundContentLoading />}                  
                </div>
                <div className='product__header__card__wrapper__shade'>
                  {Object.keys(product).length !== 0   ? <p>ŠŃŃŠµŠ½Š¾Šŗ: ŠŗŃŠ°ŃŠ½ŃŠ¹</p> : <BackgroundContentLoading />}                    
                </div>
                <div className='product__header__card__wrapper__description-product-card'>
                  <DescriptionProductŠ”ard products={product} onPlus={onPlus} />
                </div> 
              </div>
              <div className='product__header__card__structure'>
                <p>Š”Š¾ŃŃŠ°Š²:</p>
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
                <p>ŠŠæŠøŃŠ°Š½ŠøŠµ</p>
                <p>
                  {productText ? productText.description : null}
                </p>
            </div>
            <div className='product__text__instructions'>
                <p>ŠŠ½ŃŃŃŃŠŗŃŠøŃ ŠæŠ¾ ŠæŃŠøŠ¼ŠµŠ½ŠµŠ½ŠøŃ</p>
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