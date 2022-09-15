import React from 'react';
import s from './Profileinfo.module.css'

const Profileinfo = () => {
    return (
        <div >
            <div>
                <img src='https://tripplanet.ru/wp-content/uploads/europe/turkey/istanbul/stambul-dostoprimechatelnosti.jpg' /></div>
            <div className={s.discriptionBlock}>
                ava + discription
            </div>
        </div>
    )
}
export default Profileinfo;