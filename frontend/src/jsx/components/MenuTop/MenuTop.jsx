import React, {useEffect, useState} from 'react';
import MenuBurger from '../MenuBurger/MenuBurger';
import BackgroundColorDarkTransparent from '../BackgroundColorDarkTransparent/BackgroundColorDarkTransparent';
import MenuNavBar from '../MenuNavBar/MenuNavBar';
import ShoppingCart from '../../components/ShoppingCart/ShoppingCart';
import iconCard from '@images/iconCard.svg';   

export default function MenuTop(props) {
    
    const [isOpenNavBar, setIsOpenNavBar] = useState(false);
    const [backgroundColorMenuTop, setBackgroundColorMenuTop] = useState('transparent');
    const [isOpenShoppingCart, setIsOpenShoppingCart] = useState(false);

    const scrollBody = () => {
        if (!isOpenNavBar) {
            return document.body.style.overflowY = 'hidden';
        };
        return document.body.style.overflowY = 'scroll';
    }; 

    const openAndCloseNavBar = () => {        
        setIsOpenNavBar(!isOpenNavBar);
        scrollBody();
    };    

    const closeNavBar = () => {
        setIsOpenNavBar(false)
        return document.body.style.overflowY = 'scroll';
    }

    const onClickCloseShoppingCart = () => {
        setIsOpenShoppingCart(false);
    };

    const listenScrollEvent = () => {
        (window.scrollY > 80) ? setBackgroundColorMenuTop('backgroundColorPrimary') : setBackgroundColorMenuTop('transparent');
    };

    useEffect(() => {
        if(isOpenShoppingCart) {
            return document.body.style.overflowY = 'hidden';
        }
        return document.body.style.overflowY = 'scroll';
    }, [isOpenShoppingCart])

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent);
        return () => {
            window.removeEventListener('scroll', listenScrollEvent);
        };
    });

    return (
        <section className={backgroundColorMenuTop === 'transparent' ? 'menu-top ' + props.className :  'menu-top menu-top_scroll-down ' + props.className}  >
            <div className='wrapper'>
                <div className='container' >
                    {props.children}                            
                    <MenuNavBar  
                        listSubgroupProducts={props.listSubgroupProducts}
                        listLinkNavBar={props.listLinkNavBar} 
                        statusState={{isOpenNavBar:isOpenNavBar, backgroundColorMenuTop:backgroundColorMenuTop}}  
                        onClickLinkSubgroup={props.onClickLinkSubgroup}
                        onClickLinkSubgroup={props.onClickLinkSubgroup}
                        openAndCloseNavBar={openAndCloseNavBar}
                        closeNavBar={closeNavBar}
                        />
                    {!isOpenShoppingCart ? null : 
                        <ShoppingCart 
                            totalPrice={props.totalPrice} 
                            onPlus={props.onPlus} 
                            onRemoveItemToCart={props.onRemoveItemToCart} 
                            itemsCart={props.itemsCart} onClickButtonClose={onClickCloseShoppingCart} 
                            recurringProducts={props.recurringProducts}
                            onPlus={props.onPlus}
                            onMinus={props.onMinus}
                        />}
                    <div className='menu-top__shopping-cart'>
                        {isOpenShoppingCart ? 
                        null :
                        <button className='menu-top__shopping-cart__active' onClick={() => {setIsOpenShoppingCart(!isOpenShoppingCart)}}>
                            <p>{props.totalPrice ? `${props.totalPrice} руб` : null} </p>
                            <img src={iconCard} alt='корзина' />
                            </button>
                        }
                    </div>
                    {isOpenShoppingCart ? null : <MenuBurger onClick={openAndCloseNavBar} statusState={isOpenNavBar} />}
                </div>
            </div>
            <BackgroundColorDarkTransparent statusState={isOpenNavBar} onClick={openAndCloseNavBar} />
        </section>
    )
}