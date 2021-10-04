import React from 'react';
import IconLink from '../IconLink/IconLink';
import iconGitHub from '@images/iconGitHub.svg';
import iconLickTelegramDark from '@images/icon-link-dark-telegram.svg';

export default function SocialNetwork(props) {

    return (
        <div className={'social-network ' + props.className}>
            <IconLink href='https://github.com/Vetal-Ilin/PortfolioProject.git' src={iconGitHub} alt='Imstagram'></IconLink>
            <IconLink href='https://telegram.me/dobro174' src={iconLickTelegramDark} alt='Telegram'></IconLink>
        </div>
    )
}
