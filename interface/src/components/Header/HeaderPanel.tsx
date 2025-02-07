import { routes } from '@constants';
import * as React from 'react';
import { NavLink } from 'react-router-dom';

export const HeaderPanel = () => {
    return (
        <div className="header">
            <h1 className="header-logo-text">NavChat</h1>
            <div className="nav-container">
                <ul className="nav">
                    <li>
                        <NavLink to={routes.MAIN}>Главная</NavLink>
                    </li>
                    <li>
                        <NavLink to={routes.ABOUT}>Карта</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}
