import { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class HeaderOne extends Component {
    render() { 
        window.addEventListener('scroll', function() {
            var value = window.scrollY;
            if (value > 200) {
                document.querySelector('.header').classList.add(['header-fixed'], ['animated'], ['fadeInDown'])
            }else{
                document.querySelector('.header').classList.remove(['header-fixed'], ['animated'], ['fadeInDown'])
            }
        });
        return (
            <header className="header" id="navbar">
                <div className="header__bottom">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/"><img src="assets/images/logo/myu.png" alt="logo" /></Link>
                            <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler--icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                                <div className="navbar-nav mainmenu">
                                    <ul>
                                        <li className="menu-item-has-children">
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">소개</a>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="/about">회사 소개</NavLink></li>
                                                <li><NavLink to="/membership">회원등급</NavLink></li>
                                            </ul>
                                        </li>
                                        <li><NavLink to="/contact">문의하기</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}
 
export default HeaderOne;