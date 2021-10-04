import React from 'react';
import imageMyAvatar from '@images/imageMyAvatar.png';

export default function LinkAvatar(props) {
    return (
        <article className={'link-avatar ' + props.className}>
            <a href='http://vetalmmg.beget.tech/'></a>
            <img src={imageMyAvatar} alt='Мое фото' />
        </article>
    )
}
