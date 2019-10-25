import React , {Component} from 'react';
import axiosQueries from '../queries/index';
import axios from 'axios';
import { toast } from 'react-toastify';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            fullname: '',
            email: '',
            password: '',
            phone: '',
            address: '',
            country: '',
            gender: '',
            btcaddress: '',
            admin: [],
            signBtn: 'Sign Up',
            disableBtn: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        // console.log('Token', this.props.admin.adminDetails.token);
        let admins = await axiosQueries.Get('get-admin');

        this.setState({
            admin: admins,
        });
        console.log('all admins', this.state.admin)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.setState({ disableBtn: true, signBtn: 'SIGNING UP.....' });
        let Userdata = {
                fullname : this.state.fullname,
                email:this.state.email,
                password: this.state.password,
                phone: this.state.phone,
                address : this.state.address,
                country:this.state.country,
                gender:this.state.gender,
                btcaddress: this.state.btcaddress
        };
        axios.post('https://api-backend-mooncu.herokuapp.com/api/register', Userdata)
            .then(res => {
                if (res.status === 200) {
                    alert('Registered Successfully')
                    toast("You registered successfully ", {
                        position: "top-center",
                        type: 'success',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true
                    });
                    window.location.href = "/login";

                    // set state to empty
                    this.setState({
                        fullname: '',
                        email: '',
                        password: '',
                        phone: '',
                        address: '',
                        country: '',
                        gender: '',
                        btcaddress: '',
                        signBtn: 'Sign Up',
                        disableBtn: false
                    });
                }
            })
            .catch(err => {
                alert('Email already exist');
                toast('Email Already exist', {
                    position: "top-center",
                    type: 'error',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                this.setState({ disableBtn: false, signBtn: 'SIGN UP' });
            });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div>
            <section className="signup-area">
                    <div className="row m-0">
                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="signup-image">
                                <img src="assets/img/1.png" alt="mooncu"/>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 p-0">
                            <div className="signup-content">
                                <div className="d-table">
                                    <div className="d-table-cell">
                                        <div className="signup-form">
                                            <div className="logo">
                                                <a href="/"><img src="assets/img/black-logo.png" alt="mooncu"/></a>
                                            </div>

                                            <h3>Open up your Moonpayscu Account now</h3>
                                            <p>Already signed up? <a href="/login">Log in</a></p>

                                            <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                    <input type="text" onChange={this.handleChange} name="fullname" id="email" value={this.state.fullname} placeholder="fullname" className="form-control"/>
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" onChange={this.handleChange} name="email" id="email" value={this.state.email} placeholder="Your email address" className="form-control"/>
                                                </div>

                                                <div className="form-group">
                                                    <input type="password" onChange={this.handleChange} name="password" id="password"value={this.state.password} placeholder="Create a password" className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" onChange={this.handleChange} name="phone" id="phone" placeholder="+0189000" value={this.state.phone} className="form-control"/>
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" onChange={this.handleChange} name="address" id="address" value={this.state.address} placeholder="Your address" className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" onChange={this.handleChange} name="country" id="country" placeholder="Your country" value={this.state.country} className="form-control"/>
                                                </div>

                                                <div className="form-group">
                                                    <input type="text" onChange={this.handleChange} name="gender" id="gender" value={this.state.gender} placeholder="Male or Female" className="form-control"/>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text" onChange={this.handleChange} name="btcaddress" id="btc" placeholder="Your BTC address" value={this.state.btcaddress} className="form-control"/>
                                                </div>
                                                <button type="submit" disabled={this.state.disableBtn} className="btn btn-primary">{this.state.signBtn}</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
        );
    }
}

export default Register;
