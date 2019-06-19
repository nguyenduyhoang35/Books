import React, {Component} from 'react';
import './index.css';
import {NavLink} from "react-router-dom";
import RouterProtected from "./RouterProtected";

class App extends Component {

    state = {
        open: true
    };

    actionSlider() {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <div>
                <div id='main' className={this.state.open ? "" : "opacity-main"}
                     onClick={this.actionSlider.bind(this)}>
                    <div id='overlay-main' className="overlay"/>
                    <div className="slider-close"/>
                </div>
                <div className={this.state.open ? "sidenav " : "sidenav open-slide"}>
                    <div className="header-slidenav" style={{paddingLeft: 20}}>
                        <h2 className='text-primary font-weight-bold'>Books 's</h2>
                    </div>
                    <nav className="slider-navigation">
                        <ul className="menu">
                            <li className="menu-category">Menu</li>
                            <li onClick={this.actionSlider.bind(this)}>
                                <NavLink exact to={'/'} className="menu-item">
                                    <div className="menu-link">
                                        <i className="fa fa-home"/>
                                        <span className="title-menu">Home</span>
                                    </div>
                                </NavLink>
                            </li>
                            {/*<li onClick={this.actionSlider.bind(this)}>*/}
                            {/*    <NavLink exact to={'/books'} className="menu-item">*/}
                            {/*        <div className="menu-link">*/}
                            {/*            <i className="fa fa-book" style={{fontSize: '0.78rem'}}/>*/}
                            {/*            <span className="title-menu">Books</span>*/}
                            {/*        </div>*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
                            {/*<li onClick={this.actionSlider.bind(this)}>*/}
                            {/*    <NavLink exact to={'/store'} className="menu-item">*/}
                            {/*        <div className="menu-link">*/}
                            {/*            <i className="fa fa-store" style={{fontSize: '0.78rem'}}/>*/}
                            {/*            <span className="title-menu">Store</span>*/}
                            {/*        </div>*/}
                            {/*    </NavLink>*/}
                            {/*</li>*/}
                        </ul>
                    </nav>
                </div>
                <div>
                    <div className={this.state.open ? "header-mobile" : "header-mobile opacity-header"}>
                        <div className='header-mobile-left'>
                            <i className="fa fa-bars" onClick={this.actionSlider.bind(this)}/>
                        </div>
                        <div className='header-mobile-right'>
                            <div className='pl-5'>
                                <div className='header-user-avatar'>
                                    <div>
                                        <div className="avatar"
                                             style={{backgroundImage: `url('https://truyencv.com/templates/truyencv-green/assets/images/logo.png')`}}/>
                                    </div>
                                </div>
                            </div>
                            <div className='header-notify'>
                                <div>
                                        <span className='ant-badge'>
                                        </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='main-container'>
                        <div className='main-content-mobile'>
                            <RouterProtected/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;