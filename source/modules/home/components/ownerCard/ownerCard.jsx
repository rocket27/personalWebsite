import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import MENU_ITEMS from '../../../../enums/menuItems';

class OwnerCard extends Component {
    constructor(props) {
        super(props);

        this.ownerName = 'Дмитрий Каменев';
        this.description = 'Портфолио frontend разработчика';
        this.flipCard = null;

        this.state = {
            isFlipCardBack: false,
        };
    }

    flipBoxHandler() {
        !this.state.isFlipCardBack
            ? (this.flipCard.style.transform = 'rotateY(180deg)')
            : (this.flipCard.style.transform = 'rotateY(0deg)');

        this.setState({
            isFlipCardBack: !this.state.isFlipCardBack,
        });
    }

    render() {
        return (
            <section
                className="owner-card"
                ref={node => (this.flipCard = node)}
            >
                <div className="owner-card__flipbox-card">
                    <div className="owner-card__content">
                        <div className="owner-card__line owner-card__line--top-line">
                            <figure className="owner-card__owner-image-wrapper">
                                <img
                                    className="owner-card__owner-image"
                                    src="./assets/images/main-page-owner-image.jpg"
                                />
                            </figure>
                            <div className="owner-card__heading">
                                <h1 className="owner-card__title">
                                    {this.ownerName}
                                </h1>
                                <p className="owner-card__description">
                                    {this.description}
                                </p>
                            </div>
                        </div>
                        <div className="owner-card__line owner-card__line--middle-line">
                            <nav className="owner-card__nav main-nav">
                                <ul className="main-nav__list">
                                    {MENU_ITEMS.map((menuItem, index) => (
                                        <li
                                            key={index}
                                            className="main-nav__list-item"
                                        >
                                            <button
                                                className="menu-nav__button button button--menu-button"
                                                onClick={
                                                    menuItem.type !== 'redirect'
                                                        ? () =>
                                                            this.flipBoxHandler()
                                                        : () => null
                                                }
                                            >
                                                {menuItem.menuItem}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>
                        <div className="owner-card__bottom-line">
                            <div className="owner-card__socials">
                                <a
                                    className="owner-card__social-link button button--github"
                                    href=""
                                >
                                    <ReactSVG
                                        src="./assets/images/svg/github-logo.svg"
                                        className="button__icon-wrapper"
                                        svgClassName="button__icon"
                                    />
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owner-card__flipbox-card owner-card__flipbox-card--back">
                    <div className="owner-card__content">Контакты</div>
                    <button onClick={() => this.flipBoxHandler()}>Back</button>
                </div>
            </section>
        );
    }
}

export default OwnerCard;
