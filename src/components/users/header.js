import React, { Component } from 'react'
import axiosQueries from '../queries/index';
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: [],
            data: []
        };
    }

    async componentDidMount() {
        let token = localStorage.getItem('jwtToken')
        let users = await axiosQueries.Get('users', token);
        let userdata = JSON.parse(localStorage.getItem('usersDetails'));

        this.setState({
            data: Object.values(userdata),
            user: users
        })
        
        console.log('state', this.state.data)
    }

    getNames(){
        const { data } = this.state;
        // return <p>{data[9]}</p>
        return (
            <li className="has-menu-child pro-menu-drop">
                    <a href="/">
                    <div className="header-pro-thumb">
                            {/* <img className="rounded-circle" src="assets/img/profile.jpg" alt="down"/> */}
                        </div> {data[9]} <i className="fas fa-chevron-down"></i>
                    </a>
                    <ul className="dropdown-menu-md sub-menu profile-drop">
                        <li className="dropdown-header">
                            <div>
                            <h5 className="hidden-xs m-b-0 text-primary text-ellipsis">{data[9]}</h5>
                                <div className="small text-muted"><span>Account No {data[3]} </span></div>
                            </div>
                        </li>
                        <li><hr className="mx-n3 mt-0"/></li>
                        <li className="nav__create-new-profile-link">
                            <a href="/profile">
                                <span>View personal profile</span>
                            </a>
                        </li>
                        <li className="divider"></li>
                        
                        <li className="nav__dropdown-menu-items">
                            <a href="/logout"><i className="icon icon-logout"></i><span>Logout</span></a>
                        </li>
                    </ul>
                </li>
        )
        
    }
    render() {
        return (
        <header className="header02">
                    <div className="header-main">
                        <div className="container d-flex align-items-center">
                            <a href="/">
                                <img src="assets/img/black-logo.png" alt="logo"/>
                            </a>
                            <nav className="primary-menu ml-auto">
                                <a id="mobile-menu-toggler" href="/"><i className="fas fa-bars"></i></a>
                                <ul>
                                    <li className="current-menu-item"><a href="/dashboard">Dashboard</a></li>
                                {this.getNames()}    
                                
                                </ul>
                            </nav>
                        </div>
                    </div>
                    
                </header>
        )
    }
    }

    export default Header;