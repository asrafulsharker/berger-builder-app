import React , {Component} from 'react';
import Burger from './Burger/Burger';
import Controls from './Controls/Controls';
import {Modal,ModalBody,ModalHeader,ModalFooter,Button} from 'reactstrap';

const INGREDIENT_PRICES ={
    salad: 20,
    cheese:40,
    meat: 90,
}


export default class BurgerBuilder extends Component {
    state={
        ingredients:[
            {type: 'salad', amount: 0},
            {type: 'cheese', amount: 0},
            {type: 'meat', amount: 0},
        ],
        totalPrice:80,
        modalOpen:false,
    }

    addIngredientHandle = type=>{
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice + INGREDIENT_PRICES[type ];
        for ( let item of ingredients){
            if(item.type === type) item.amount++;
        }
        this.setState({ingredients: ingredients, totalPrice : newPrice});
    }

    removeIngredientHandle =type=>{
        const ingredients = [...this.state.ingredients];
        const newPrice = this.state.totalPrice - INGREDIENT_PRICES[type ];
        for ( let item of ingredients){
            if(item.type === type){
                if(item.amount <= 0)return;
                item.amount --;
            } 
        }
        this.setState({ingredients: ingredients, totalPrice : newPrice});
    }

    toggleModal=()=>{
        this.setState({
            modalOpen: !this.state.modalOpen
        })
    }


    render(){
        return(
            <div>
           <div className="d-flex flex-md-row flex-column">
                <Burger ingredients={this.state.ingredients}/>
                <Controls
                    ingredientAdded = {this.addIngredientHandle}
                    ingredientRemoved = {this.removeIngredientHandle}
                    price={this.state.totalPrice}
                    toggleModal={this.toggleModal}
                />
            </div>
                <Modal isOpen={this.state.modalOpen}>
                    <ModalHeader>Your Order Summary</ModalHeader>
                    <ModalBody>
                        <h5>Total Price: {this.state.totalPrice.toFixed(0)} BDT</h5>
                        
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success"onClick={this.toggleModal}>Continue to Checkout</Button>
                        <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
 
        )
    }
}