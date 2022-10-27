import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' className={({ isActive }) => `${isActive ? s.activelink : ''}`}> Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' className={({ isActive }) => `${isActive ? s.activelink : ''}`}> Message</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' className={({ isActive }) => `${isActive ? s.activelink : ''}`}> Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' className={({ isActive }) => `${isActive ? s.activelink : ''}`}> News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' className={({ isActive }) => `${isActive ? s.activelink : ''}`}> Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' className={({ isActive }) => `${isActive ? s.activelink : ''}`}> Settings</NavLink>
            </div>
            <div className={s.siteBarMenu}>
                <h2>Sitebar</h2>
                <div className='siteBarInner'>
                    <a href=""></a>
                    <a href=""></a>
                    <a href=""></a>
                </div>
            </div>

        </nav>
    )
}
export default Nav;