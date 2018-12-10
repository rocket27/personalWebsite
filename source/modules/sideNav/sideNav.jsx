import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import MENU_ITEMS from '../../enums/menuItems';

const SideNav = () => {
    return (
        <aside className="sideNav">
            <nav className="sideNav__nav">
                <ul className="sideNav__list">
                    <li className="sideNav__list-item">
                        <Link to="/" className="sideNav__list-item-link">
                            Главная
                        </Link>
                    </li>
                    {MENU_ITEMS.map(
                        (item, index) =>
                            !!item.stateName && (
                                <li key={index} className="sideNav__list-item">
                                    <NavLink
                                        exact
                                        to={item.stateName}
                                        className="sideNav__list-item-link"
                                        activeClassName="sideNav__list-item-link--active"
                                    >
                                        {item.menuItem}
                                    </NavLink>
                                </li>
                            )
                    )}
                </ul>
            </nav>
        </aside>
    );
};

export default SideNav;
