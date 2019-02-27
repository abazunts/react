import React from "react";
import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <div className={s.main__header}>
                <div className={s.container}>
                    <div className="row justify-content-between">
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-2">
                            <nav className={s.menu}>
                                <ul className="d-flex">
                                    <li className={s.menu__item}>
                                        <a href="#">
                                            Login
                                        </a>
                                    </li>
                                    <li className={s.menu__item}>
                                        <a href="#">
                                            Sign UP
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                    </div>
                </div>
                <div className={s.search}>
                    <div className={s.container}>
                        <div className="col-lg-12 d-flex  justify-content-center">
                                    <span className={s.search__name}>
                                        Search
                                    </span>
                            <input className={s.search__text} wrap="off"></input>
                            <button className={s.search__button}></button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;



