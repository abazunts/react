import React from "react";
import s from './header.module.css';
import logo from "./../../img/UI8Logo.png"

const Header = () => {
    return (
        <header      className={s.header}>

            <div className={s.hlogo}> <img className={s.logo} src={logo}/></div>





            {/*<div className={s.main__header}>*/}
                {/*<div className={s.container}>*/}
                    {/*<div className="row justify-content-between">*/}
                        {/*<div className="col-lg-2">*/}
                        {/*</div>*/}
                        {/*<div className="col-lg-2">*/}
                            {/*<nav className={s.menu}>*/}
                                {/*<ul className="d-flex">*/}
                                    {/*<li className={s.menu__item}>*/}
                                        {/*<a href="#">*/}
                                            {/*Login*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                    {/*<li className={s.menu__item}>*/}
                                        {/*<a href="#">*/}
                                            {/*Sign UP*/}
                                        {/*</a>*/}
                                    {/*</li>*/}
                                {/*</ul>*/}
                            {/*</nav>*/}
                        {/*</div>*/}

                    {/*</div>*/}
                {/*</div>*/}

        </header>
    )
}

export default Header;



