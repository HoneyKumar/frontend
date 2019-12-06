import React from 'react';

import {Link} from 'react-router-dom';


class Header extends React.Component{

    render(){
        return(
            <div className="workteams_header_01">
                <nav className="navbar navbar-default">
                    {/* <div id="navbari">
                        <div className="container">
                            <div className="first_header">
                                <div className="col-md-5"></div>
                                <div className="col-md-4 koha">
                                <span id="date"></span><span id="islamicDate"></span> 
                                </div>
                                <div className="col-md-3 buttona">
                                </div>
                            </div>
                        </div> 
                    </div> */}
                    <div className="container">
                        <div id="logo">
                            <a className="logo" href="https://alhijaztoursandtravels.com">
                            <img className="fixed-logo" src="https://app.alhijaztoursandtravels.com/packages/usoft/calculator/src/Calculator/assets/images/dynamic_templates/template6/logo-alhjz.png" alt="Al-Hijaz Tours &amp; Travels Ltd" width="" />
                                <img className="nav-logo" src="https://app.alhijaztoursandtravels.com/packages/usoft/calculator/src/Calculator/assets/images/dynamic_templates/template6/logo-alhjz.png" alt="Al-Hijaz Tours &amp; Travels Ltd" width="" />
                            </a>
                        </div>
                        <div className="navbar-header page-scroll">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#main-menu">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <div className="mobile-cart">
                            </div>
                        </div>
                        <div id="main-menu" className="collapse navbar-collapse  navbar-right">
                        <ul id="menu-main-menu" className="nav navbar-nav">
                            <li id="menu-item-2263" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-1972 current_page_item menu-item-2263 active">
                                <a title="HOME" href="https://alhijaztoursandtravels.com/">HOME</a>
                            </li>
                            <li id="menu-item-2372" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-2372">
                                <a title="ABOUT US" href="http://alhijaztoursandtravels.com/about-us">ABOUT US</a>
                            </li>
                            <li id="menu-item-4613" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4613 dropdown">
                                <a title="HAJJ" href="https://alhijaztoursandtravels.com/hajj/">HAJJ</a>
                                <ul role="menu" className=" dropdown-menu">
                                    <li id="menu-item-4922" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4922">
                                        <a title="Preparing for Hajj" href="https://alhijaztoursandtravels.com/hajj/#Preparing-for-Hajj">Preparing for Hajj</a>
                                    </li>
                                    <li id="menu-item-4923" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4923">
                                        <a title="Accommodation" href="https://alhijaztoursandtravels.com/hajj/#Accommodation">Accommodation</a>
                                    </li>
                                    <li id="menu-item-4924" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4924">
                                        <a title="The Team" href="https://alhijaztoursandtravels.com/hajj/#The-Team">The Team</a>
                                    </li>
                                    <li id="menu-item-4926" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4926">
                                        <a title="Packages" href="https://alhijaztoursandtravels.com/hajj/#Packages">Packages</a>
                                    </li>
                                    <li id="menu-item-4927" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4927">
                                        <a title="Guide" href="https://alhijaztoursandtravels.com/hajj/#Guide">Guide</a>
                                    </li>
                                </ul>
                                <span className="mobile-dropdown"></span>
                            </li>
                            <li id="menu-item-4617" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4617 dropdown">
                                <a title="UMRAH" href="https://alhijaztoursandtravels.com/umrah/">UMRAH</a>
                                <ul role="menu" className=" dropdown-menu">
                                    <li id="menu-item-4928" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4928">
                                        <a title="Accommodation" href="https://alhijaztoursandtravels.com/umrah/#Accommodation">Accommodation</a>
                                    </li>
                                    <li id="menu-item-4929" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4929">
                                        <a title="Packages" href="https://alhijaztoursandtravels.com/umrah/#Packages">Packages</a>
                                    </li>
                                    <li id="menu-item-4931" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4931">
                                        <a title="Tailor-made" href="https://alhijaztoursandtravels.com/umrah/#Tailor-made">Tailor-made</a>
                                    </li>
                                    <li id="menu-item-4932" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4932">
                                        <a title="Guide" href="https://alhijaztoursandtravels.com/umrah/#Guide">Guide</a>
                                    </li>
                                    <li id="menu-item-4933" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-4933">
                                        <a title="Preparing for Umrah" href="https://alhijaztoursandtravels.com/umrah/#Preparing-for-Umrah">Preparing for Umrah</a>
                                    </li>
                                </ul>
                                <span className="mobile-dropdown"></span>
                            </li>
                            <li id="menu-item-4630" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-4630 dropdown">
                                <a title="HALAL HOLIDAYS" href="https://alhijaztoursandtravels.com/halal-holidays/">HALAL HOLIDAYS</a>
                                <ul role="menu" className=" dropdown-menu">
                                    <li id="menu-item-4643" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4643">
                                        <a title="Packages" href="https://alhijaztoursandtravels.com/halal-holidays/">Packages</a>
                                    </li>
                                    <li id="menu-item-4642" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4642">
                                        <a title="Hotels" href="https://alhijaztoursandtravels.com/halal-holidays/">Hotels</a>
                                    </li>
                                    <li id="menu-item-4644" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4644">
                                        <a title="Resorts" href="https://alhijaztoursandtravels.com/halal-holidays/">Resorts</a>
                                    </li>
                                </ul>
                                <span className="mobile-dropdown"></span>
                            </li>
                            <li id="menu-item-4987" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4987">
                                <a title="MEDIA" href="https://alhijaztoursandtravels.com/media/">MEDIA</a>
                            </li>
                            <li id="menu-item-4575" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-4575">
                                <a title="CONTACT" href="https://alhijaztoursandtravels.com/contact-us/">CONTACT</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;