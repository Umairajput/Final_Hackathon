import React from 'react';
import {
    HOME,
    SIGN_UP,
    SIGN_IN,
    ADMIN_ADD_PRODUCT,
    ADMIN_PROFILE_SETTING,
    ADMIN_ORDERS_GET,
    ADMIN_PRODUCTS,
    USER_HOME_PAGE,
    USER_PROFILE,
    USER_SHOPPING_CART
} from './path'
import {Home,SignUp,Login} from '../Screens/index'
import { Routes, Route } from 'react-router-dom'

const Router = () => {
    return (
        <Routes>
            <Route path={HOME} element={<Home/>}></Route>
            <Route path={SIGN_UP} element={<SignUp/>}></Route>
            <Route path={SIGN_IN} element={<Login/>}></Route>
        </Routes>
    )
}
export default Router