import React, { Component } from 'react'
import AccountContainer from './AccountContainer'

import '../stylesheets/App.css'

class App extends Component {

  state = {
    transactions: [],
    filterTransaction: []
  }
  componentDidMount() {
    fetch('https://boiling-brook-94902.herokuapp.com/transactions')
    .then(r=> r.json())
    .then((data)=> this.setState({
      transactions: data
    }))
  }

  handleOnChange = (searchedTransaction) => {
    const newTransaction = this.state.transactions.filter(transaction => transaction.description.includes(searchedTransaction) || transaction.category.includes(searchedTransaction) )
    console.log(newTransaction)
    this.setState({
      filterTransaction: [...newTransaction]
    })



  }
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
          <AccountContainer transactions={this.state.transactions} filterTransaction={this.state.filterTransaction} handleOnChange={this.handleOnChange} />
        </div>



      </div>
    )
  }
}

export default App
