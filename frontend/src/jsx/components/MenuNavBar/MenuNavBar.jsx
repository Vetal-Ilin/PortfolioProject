import React from 'react';
import SocialNetwork from '../SocialNetwork/SocialNetwork';
import ListSubgroupProducts from '../ListSubgroupProducts/ListSubgroupProducts';
import LinkButtonToScroll from '../LinkButtonToScroll/LinkButtonToScroll';


export default function MenuNavBar(props) {
    
    let timeScroll = 1000;
    return (
        <nav className={!props.statusState.isOpenNavBar ? 'menu-nav-bar': 'menu-nav-bar menu-nav-bar_open'}  >
            <div className={props.statusState.backgroundColorMenuTop === 'transparent' ? 'menu-nav-bar__wrapper' : 'menu-nav-bar__wrapper menu-nav-bar__wrapper_scroll-down'}>
                <ListSubgroupProducts 
                    listSubgroupProducts={props.listSubgroupProducts} 
                    openAndCloseNavBar={props.openAndCloseNavBar} 
                    onClickLinkSubgroup={props.onClickLinkSubgroup}
                    closeNavBar={props.closeNavBar}
                    />
                {props.listLinkNavBar.map(
                    item => <LinkButtonToScroll 
                                link={true} 
                                closeNavBar={props.closeNavBar}
                                to={item.to} key={item.id} 
                                smooth={true} offset={-100} 
                                duration={timeScroll}>
                                {item.title}
                            </LinkButtonToScroll>)
                }
                <SocialNetwork className='menu-nav-bar__wrapper__social-network' />
                <a href='tel:+79088284777' className='menu-nav-bar__wrapper__telephone'><p className='text-page1'>+7-(908)-828-47-77</p></a>
            </div>
        </nav>
    )
}

