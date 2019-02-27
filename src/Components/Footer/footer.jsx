import React from "react";
import s from './footer.module.css'


const Footer = () => {
    return (
        <footer className={s.footer}>
            <nav className={s.menu}>
                <ul className="d-flex justify-content-center">
                    <li className={s.menu__item}>
                        <a href="#">
                            Popular
                        </a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#">
                            Recent
                        </a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#">
                            Teams
                        </a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#">
                            Debuts
                        </a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#">
                            Playoffs
                        </a>
                    </li>
                    <li className={s.menu__item}>
                        <a href="#">
                            Animated GIF's
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={s.social}>
                <ul className="d-flex justify-content-center">
                    <li className={s.facebook}></li>
                    <li className={s.twitter}></li>
                    <li className={s.google}></li>
                </ul>
            </div>
            <div className={s.reserved}>
                © 2019 – All Right Reserved
            </div>
        </footer>
    )
}

export default Footer;