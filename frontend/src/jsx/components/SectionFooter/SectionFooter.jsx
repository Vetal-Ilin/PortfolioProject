import React from 'react';
import SocialNetwork from '../SocialNetwork/SocialNetwork';

export default function SectionFooter() {
    return (
        <footer className='section-footer'>
            <div className='container'>
                <div className='section-footer__telephone'>
                    <p>Телефон:</p>
                    <a href='tel:+79088284777'><p>+7-(908)-828-477-77</p></a>
                </div>
                <div className='section-footer__social-network'>
                    <SocialNetwork />
                </div>
                <div className='section-footer__mail'>
                    <p>Электронная почта:</p>
                    <a href='/'><p>Vetaly-ilin@yandex.ru</p></a>
                </div>
            </div>
        </footer>
    )
}
