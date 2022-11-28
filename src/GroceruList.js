import { Component } from "react";

export class GroceryList extends Component {
  state = {
    userInput:'',
    shoppingList:[]
  }

  onChangeEvent(e){
    this.setState({userInput:e})
  }

  addItem(input){
    let listArray = this.state.shoppingList;
    listArray.push(input);
    this.setState({shoppingList: listArray, userInput: ''})
  }

  render() {
    return(
      <div>
        <div>
          <input type='text'
          placeholder="What do you want to buy?"
          onChange={(e) => {this.onChangeEvent(e.target.value)}}
          value={this.state.userInput}/>
        </div>
        <div>
          <button onClick={() => this.addItem(this.state.userInput)}>ADD</button>
          </div>
          <ul>
            {this.state.shoppingList.map((item) => (
              <li>{item}</li>
            ))}
          </ul>



      </div>
     
    
    )
  
  }
}