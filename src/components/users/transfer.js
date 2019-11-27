import React, { Component } from 'react'
import axiosQueries from '../queries/index';
import axios from 'axios';
import Header from './header';
import SideBar from './sidebar';
import SubHeader from './subheader';
class Transfer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        user: [],
        data: [],
        amount: 2,
        beneficiary: '',
        bankName: '',
        bankAdress: '',
        pin: '',
        accountNo: '',
        swiftCode: '',
        routingNo: '',
        amountPay: '',
        transferBtn: 'Transfer',
        disableBtn: false
        
    };
}

async componentDidMount() {
    let token = localStorage.getItem('jwtToken')
    let users = await axiosQueries.Get('users', token);
    let Postdata = JSON.parse(localStorage.getItem('usersDetails'));

    this.setState({
        data: Object.values(Postdata),
        user: users
    })
    
    console.log('balance', this.state.user)
}

handleSubmit = (e) => {
  e.preventDefault();
  this.setState({ disableBtn: true, transferBtn: 'transferring...' });
  let Postdata = {
          beneficiary : this.state.beneficiary,
          pin:this.state.pin,
          accountNo: this.state.accountNo,
          routingNo: this.state.routingNo,
          swiftCode : this.state.swiftCode,
          bankName:this.state.bankName,
          bankAdress:this.state.bankAdress,
          amount: this.state.amountPays,
          routingNumber: this.state.routingNo
  };
  axios.post('funds-transfer', Postdata)
      .then(res => {
          if (res.status === 200) {
              alert('Funds transfered Successfully')
              
              // window.location.href = "/login";

              // set state to empty
              this.setState({
                  beneficiary : '',
                  pin:'',
                  accountNo: '',
                  routingNo: '',
                  swiftCode : '',
                  bankName:'',
                  bankAdress:'',
                  amountPays: '',
                  transferBtn: 'Transfer',
                  disableBtn: false
              });
          }
      })
      .catch(err => {
          alert('Insufficient Balance');
          
          this.setState({ disableBtn: false, transferBtn: 'Transfer' });
      });
}

handleChange = (e) => {
  this.setState({ [e.target.name]: e.target.value })
}


getAmount = () => {
    const { data } = this.state;
        return (
          <h3 className="text-10 text-white font-weight-400">${data[0]}</h3>
        )
  }
  
  render() {
    return (
      <div id="main-wrapper">
        <Header />
        <div id="content" className="py-4">
          <div className="container">
            <div className="row">
              <SideBar />
              <div className="col-lg-9">
                <SubHeader />
                <h3 className="text-5 font-weight-700 d-flex admin-heading">Transfer Money</h3>
                <div className="bg-white">
                    <div className="row">
                        <div className="col-md-8 col-lg-8 mx-auto ">
                        <div className="bg-light shadow-sm rounded p-3 p-sm-4 mb-4  form-box">
                                    <div className="text-center bg-primary p-4 rounded mb-4">
                                        {this.getAmount()}
                                        <p className="text-white">Available Balance</p>
                                    </div>
                                    <form id="form-send-money" method="post" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="Beficiary Name">Beneficiary</label>
                                        <input type="text" value={this.state.beneficiary} onChange={this.handleChange} name="beneficiary" className="form-control" data-bv-field="emailid"
                                                id="emailID" required placeholder="Beneficiary name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Account No">Account No</label>
                                        <input type="text" value={this.state.accountNo} onChange={this.handleChange} name="accountNo" className="form-control" data-bv-field="emailid"
                                                id="emailID" required placeholder="Account No"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Bank address">Bank Address</label>
                                        <input type="text" value={this.state.bankAdress} onChange={this.handleChange} name="bankAdress" className="form-control" data-bv-field="emailid"
                                                id="emailID" required placeholder="Bank Address"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Bank Name">Bank Name</label>
                                        <input type="text" value={this.state.bankName} onChange={this.handleChange} name="bankName" className="form-control" data-bv-field="emailid"
                                                id="emailID" required placeholder="Bank Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Swift code">Swift Code</label>
                                        <input type="text" value={this.state.swiftCode} onChange={this.handleChange} name="swiftCode" className="form-control" data-bv-field="emailid"
                                                id="emailID" required placeholder="Swift Code"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Routing No">Routing No</label>
                                        <input type="text" value={this.state.routingNo} onChange={this.handleChange} name="routingNo" className="form-control" data-bv-field="emailid"
                                                id="emailID" required placeholder="Routing No"/>
                                    </div>
                                    
                                    <div className="form-group">
                                        <label htmlFor="emailID">Pin</label>
                                        <input type="text" value={this.state.pin} onChange={this.handleChange} name="pin" className="form-control" data-bv-field="emailid"
                                                id="emailID" required placeholder="4 digit Pin"/>
                                    </div>
                                      <div className="form-group">
                                        <label htmlFor="youSend">Amount</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend"><span
                                                    className="input-group-text currency-icon">$</span>
                                            </div>
                                            <input type="text" onChange={this.handleChange} name="amountPays" className="form-control" data-bv-field="youSend"
                                                    id="youSend"
                                                    value={this.state.amountPays} placeholder=""/>
                                            
                                        </div>
                                      </div>
                                        <button className="btn btn-default btn-center btn-block" disable={this.state.disableBtn}>
                                            <span className="bh"></span>
                                            <span>{this.state.transferBtn}</span>
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Transfer