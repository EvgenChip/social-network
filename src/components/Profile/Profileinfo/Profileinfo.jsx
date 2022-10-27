import React from 'react';
import { Navigate } from 'react-router-dom'
import Preloader from '../../common/Preloader'
import s from './Profileinfo.module.css'
import ProfileStatus from './ProfileStatus'

const Profileinfo = (props) => {

    if (props.profile == null || props.profile == undefined) {

        return <Preloader />
    }


    return (
        <div >
            <div>
            </div>
            <div className={s.discriptionBlock}>
                <img src={props.profile.photos.lage} />

                <ProfileStatus status={'Hello mahaloo'} />
            </div>
        </div>
    )
}
export default Profileinfo;