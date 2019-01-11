import React,{ Component } from 'react';
import Layout from '../../component/Layout';
import Burger from '../../component/Burger';
import BuildControls from '../../component/Burger/BuildControls';
import OrderSummary from './../../component/OrderSummmary';
import { Modal } from 'react-bootstrap';

class BurgerBulder extends Component{
    constructor(){
        super();
        this.state = {
            ingredients : {
                cheese:0,
                salad:0,
                peanut:0,
                mushrooms:0
            },
            totalPrice:0,
            show:false
        }       
    }
    handleAdd = (type, rate) => {
        this.setState((state) => {
            return {
                ingredients: {
                    ...state.ingredients,
                    [type]: state.ingredients[type] + 1,
                },
                totalPrice: state.totalPrice + rate
            }
        });
    }
    handleRemove = (type, rate) => {
        if(this.state.ingredients[type] > 0){
            this.setState((state) => {
                return {
                    ingredients: {
                        ...state.ingredients,
                        [type]: state.ingredients[type] - 1,
                    },
                    totalPrice: state.totalPrice - rate
                }
            });
        }
    }
    handleOrder = () => {
        console.log("show");
        this.setState({
            show:true
        })
    }
    handleHide= () => {
        console.log("show");
        this.setState({
            show:false
        })
    }
    cancel = () => {
        console.log("show");
        this.setState({ show: false })
    }

    checkout = () => {
        alert('Order placed');
    }
    render(){
        let disabled = [];
        Object.keys(this.state.ingredients).map((element, index) => {
            return disabled[element] = this.state.ingredients[element] <= 0
        })
        console.log(disabled)
        return(
            <>
                <Layout>
                    <Modal
                        show={this.state.show}
                        onHide={this.handleHide}
                        container={this}
                        aria-labelledby="contained-modal-title"
                        >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title">
                            Order Details
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <OrderSummary 
                                ingredients = {this.state.ingredients}
                                close={this.cancel}
                                checkout={this.checkout}
                                totalPrice={this.state.totalPrice}
                            />
                        </Modal.Body>
                    </Modal>
                    <Burger ingredients={this.state.ingredients}/>
                    <BuildControls 
                        handleAdd = {this.handleAdd} 
                        handleRemove = {this.handleRemove} 
                        disableding = {disabled}
                        totalPrice = {this.state.totalPrice}
                        handleOrder = {this.handleOrder}
                    />
                </Layout>
            </>
        )
    }
}

export default BurgerBulder