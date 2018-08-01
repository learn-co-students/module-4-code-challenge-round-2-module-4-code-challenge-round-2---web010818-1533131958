import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    allTransactions: [],
    formInput: ''
  }

  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(response => response.json())
      .then(data => this.setState({
        allTransactions: data
      }))
  }

  handleChange = (event) => {
    this.setState({
      formInput: event.target.value
    })
  }

  // only need to check the description and category
// NOT SURE IF || WILL WORK I JUST ADDED IT BUT IF YOU REMOVE THAT PART IT DOES WORK 
  filterItemList = () => {
    if (this.state.formInput !== '' ){
      const filteredItems = this.state.allTransactions.filter(transaction => transaction.description.includes(this.state.formInput) || transaction.category.includes(this.state.formInput)
     )
     return filteredItems
   } else {
     return this.state.allTransactions
   }
  }


  render() {

    return (
      <div>
        <Search handleChange={this.handleChange}/>

        <TransactionsList allTransactions={this.state.allTransactions}
          filterItemList={this.filterItemList}
        formInput={this.state.formInput}/>
      </div>
    )
  }
}

export default AccountContainer
