import React from 'react'; 
import PageLogoToScroll from '../../components/PageLogoToScroll/PageLogoToScroll';
import MenuTop from '../../components/MenuTop/MenuTop';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ListСardsNewProducts from '../../components/ListСardsNewProducts/ListСardsNewProducts';
import ListСardsHitProducts from '../../components/ListСardsHitProducts/ListСardsHitProducts';
import ListSubgroupСardsProducts from '../../components/ListSubgroupСardsProducts/ListSubgroupСardsProducts';
import PurchaseStages from '../../components/PurchaseStages/PurchaseStages';
import SectionText from '../../components/SectionText/SectionText';  
import SectionFooter from '../../components/SectionFooter/SectionFooter';
import imageAboutProject from '@images/imageAboutProject.png';

export default function Home({
    catalog, 
    itemsCart, 
    totalPrice, 
    recurringProducts, 
    onPlus,
    onMinus,
    onRemoveItemToCart,
    listSubgroupProducts,
    onClickLinkSubgroup}) {

    const listLinkNavBar = [
        {
            to: 'home__order-procedure-id',
            title: 'Процедура заказа',
            id: 'link-home-menu-top-order-procedure-id'
        },
        {
            to: 'home__about-us-id',
            title: 'О проекте',
            id: 'link-home-menu-top-about-us-id'
        }
    ];

    return (
        <div className='home'> 
            <MenuTop 
                    listLinkNavBar={listLinkNavBar} 
                    listSubgroupProducts={listSubgroupProducts}
                    itemsCart={itemsCart} 
                    totalPrice={totalPrice} 
                    onRemoveItemToCart={onRemoveItemToCart} 
                    recurringProducts={recurringProducts} 
                    onPlus={onPlus}
                    onMinus={onMinus}
                    onClickLinkSubgroup={onClickLinkSubgroup}
                    >
                <PageLogoToScroll to='home__header-id' />
            </MenuTop>
            <section className='home__header' id='home__header-id'>
                <SectionHeader 
                    className='home__header__section-header' 
                    to='home__catalog-id'
                    title='МОЙ ПРОЕКТ'
                    text='Проект стилизован под интернет-магазин продукции для ногтевого сервиса'
                    buttonText = 'Перейти'
                    >
                </SectionHeader>
            </section>
            <section className='home__catalog' id='home__catalog-id'>
                <div className='container'>                                
                    <ListСardsNewProducts statusState={catalog} onPlus={onPlus} className='home__catalog__list-cards-new-products'  />
                    <ListСardsHitProducts statusState={catalog}  onPlus={onPlus}  className='home__catalog__list-cards-hit-products' />
                    <ListSubgroupСardsProducts 
                        statusState={catalog} 
                        listSubgroupProducts={listSubgroupProducts}
                        onClickLinkSubgroup={onClickLinkSubgroup} 
                        className='home__catalog__list-subgroup-cards-products' />                
                </div>
            </section>

            <section className='home__order-procedure' id='home__order-procedure-id'>
                <div className='container'>
                    <PurchaseStages />
                </div>
            </section>

            <section className='home__about-us' id='home__about-us-id'> 
                <h2>О проекте</h2>
                <div className="container">
                    <SectionText 
                        className='home__about-us__image-description__brend'
                        text='Проект эмитирует интернет-магазин косметики для ногтевого сервиса. Для написания кода используется библиотека React. 
                        Проект собран при помощи Webpack, является адаптивным и кроссбраузерным. 
                        Товары загружаются с тестового сервера mockAPI. Исходный код вы можете посмотреть на моем репозитории на GitHub.'
                        src={imageAboutProject}
                    >
                        <a href='https://github.com/Vetal-Ilin/PortfolioProject.git'><p>Исходный код</p></a>
                        <a href='http://vetalmmg.beget.tech/'><p>Мое резюме</p></a>
                    </SectionText>
                </div>
            </section>
            <section className='home__section-footer'>
                <SectionFooter />
            </section>
        </div>
    )
}
