import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {


  constructor() {
    super()

    this.state = {
        transactions: [],
        searchBar: ''
    }
  }

  componentDidMount(){
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
      .then(resp => resp.json())
      .then(resp => this.setState(
        { transactions: resp }
      ))
  }

  transactionFilter = () => {
    return this.state.transactions.filter(
      (item) =>
      item.description.toLowerCase().includes(this.state.searchBar) || item.category.toLowerCase().includes(this.state.searchBar)
    )
  }

  handleChange = (event) => {
    this.setState( {searchBar: event.target.value.toLowerCase()} )
  }

  render() {
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={this.transactionFilter()} />
      </div>
    )
  }
}

export default AccountContainer
