import React, { Component } from 'react'
export default class Buynow extends Component {
    constructor() {
        super();
        this.state = {
            cardNumber: '',
            cardName: '',
            cardExpiry: '',
            cvv: ''
        }
    }
    handleInput = (e) => {
        this.setState({[e.target.name]: e.target.value })
    }
    handleCheckoutByDetails = () => {
        const data = Math.floor(Math.random() * parseInt("9".repeat(15)))
        alert("Order placed successfully\nYour order Id is: #" + data)
    }
    handleCheckout = () => {
        const randomData = Math.floor(Math.random() * parseInt("9".repeat(15)))
        alert("Order placed successfully\nYour order Id is: #" + randomData)
    }

    render() {
        const wallet = localStorage.getItem('wallet')
        return (
            <div>
                <div style={{padding:'0 10%'}}>
                    <h3>Payment Option</h3><br />
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">By Card</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">By Wallet</a>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <h4>Payment By Card</h4><br />
                            <div>
                                <form>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">Card No.</label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control" onChange={this.handleInput} name='cardNumber'
                                                required size="16"
                                                minLength="16" maxLength="16"
                                                value={this.state.cardNumber}
                                                placeholder="enter 16 digit card no.." />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">Card Expiry Date</label>
                                        <div className="col-sm-7">
                                            <input type="month" className="form-control" onChange={this.handleInput}  value={this.state.cardExpiry} name='cardExpiry' placeholder="mm/yy" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">CVV No.</label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control" onChange={this.handleInput} name='cvv'
                                                required size="3"
                                                minLength="3" maxLength="3"
                                                value={this.state.cvv}
                                                placeholder="enter cvv number.." />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-sm-5 col-form-label">Card Holder Name</label>
                                        <div className="col-sm-7">
                                            <input type="text" className="form-control" onChange={this.handleInput} value={this.state.cardName} name='cardName' placeholder="card holder name.." />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <div className="col-sm-5">
                                            <button type="submit" className="btn btn-primary" onClick={this.handleCheckoutByDetails}>Checkout</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <h4>Payment By  Your Wallet</h4><br />
                            <p>Your current wallet amount is Rs.{wallet}</p>
                            <button type="submit" onClick={this.handleCheckout} className="btn btn-primary">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

