import { Component } from "react";

export class GroceryList extends Component {
  state = {
    userInput:'',
    shoppingList:[]

  }
  render() {
    return(
      <div>
      <input type='text'
       placeholder="What do you want to buy?"
      onChange={this.onChangeEvent}
      />
    </div>
    )
  
  }
}