import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) => {
    console.log(props)
    return (
        <header className={s.header}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1ra5gFCFktzWFKS59KfiuAlanWk0O8uUy4s2I_T-HaqAP-UyBoLTW0I2gadlnr3RKynk&usqp=CAU'></img>
            <div className={s.loginBlock}>

                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>


        </header>
    )
}

export default Header;