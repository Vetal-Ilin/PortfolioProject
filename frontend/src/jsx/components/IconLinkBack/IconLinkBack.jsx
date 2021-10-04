import React from 'react';
import { useHistory  } from 'react-router';
import iconArrowBack from '@images/iconArrowBack.svg';


export default function IconLinkBack(props) {

    const history = useHistory(); 

    let goBack = () => history.goBack();

    return (
        <button className={'icon-link-back ' + props.className} onClick={() => {goBack()}}><img src={iconArrowBack} alt='' /><p>Назад</p> </button>
    )
}

