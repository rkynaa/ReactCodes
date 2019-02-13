
import React, {Component} from 'react';
import  './App.css'
import Header from './components/HeaderMoney';
import {
    CSSTransitionGroup
} from 'react-transition-group'


export default class MoneyClass extends Component  {
    constructor(props) {
        super(props)
        this.state = {
        ListMoney : [],
        totalMoney: 0,
        NegInd: false,
        PosNeg: false
        }
    }


    addMoney = (e)=> {
        e.preventDefault();
        const HourMoney = this.refs.HourMoney.value;
        if (this.state.NegInd === false){
            var ActiveMoney = this.refs.ActiveMoney.value;
            var temp = parseInt(this.state.totalMoney) + parseInt(this.refs.ActiveMoney.value);
        } else {
            var ActiveMoney = "-" + this.refs.ActiveMoney.value;
            var temp = parseInt(this.state.totalMoney) - (parseInt(this.refs.ActiveMoney.value));
        }
        const tMoney = temp;
        this.state.ListMoney.push({HourMoney, ActiveMoney});
        this.setState({ListMoney : this.state.ListMoney, totalMoney: tMoney, NegInd: false});

        this.refs.FormMoney.reset();
        this.refs.HourMoney.focus();
    }

    removeMoney = (i)=> {
        const temp = this.state.ListMoney[i].ActiveMoney;
        console.log(temp);
        const tMoney = parseInt(this.state.totalMoney) - parseInt(temp);
        this.state.ListMoney.splice(i,1);
        this.setState({ListMoney: this.state.ListMoney,totalMoney: tMoney});
        this.refs.FormMoney.reset();
        this.refs.HourMoney.focus();
    }

    Clicker=(u)=>{
        u.preventDefault();
        var inp = window.confirm("Are you sure?");
        if (inp === true) {
            this.setState({NegInd: true});
        }
    }
    render() {
    return (
        <React.Fragment>
        <div className="App">
            <Header/>
            <form ref="FormMoney" className="form-inline">
                <button onClick={this.Clicker} className="btn btn-info">
                    Negative
                </button>
                <input type="text" className="form-control" size="8" ref="HourMoney" placeholder="Hour" />
                <input type="text" className="form-control" size="30" ref="ActiveMoney" placeholder="Money" />
                <button onClick={this.addMoney} className="btn btn-info">
                    Keep
                </button>
                <br/>
            </form>
            <hr/>
                <div>
                <p>{this.state.NegInd ? "Negative On" : "Negative Off"}</p>
                <p>Total money that your have right now is {this.state.totalMoney}</p>
                <ul>
                    <CSSTransitionGroup
                        transitionName="animasi"
                        transitionEnter={true}
                        transitionEnterTimeout={500} transitionLeave={true} transitionLeaveTimeout={500}>
                    {this.state.ListMoney.map((money, index) =>
                        <li key={index}>
                            <div className="todo-wrapper">
                            <button onClick={()=>this.removeMoney(index)}
                            className="btn btn-outline-danger">hapus</button> {money.HourMoney} : {money.ActiveMoney}
                            </div>
                        </li>
                    )}
                    </CSSTransitionGroup>
                </ul>
                </div>
            </div>
        </React.Fragment>
    );
    }

    }
