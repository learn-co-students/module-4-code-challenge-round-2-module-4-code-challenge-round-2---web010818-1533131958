import React from 'react'
import Transaction from './Transaction'

const TransactionsList = (props) => {


  const handleTransactions = () => {
    // going to add a conditional here to see if theres anything in the filterTransaction array. if there is, map over filterTransaction
    return props.transactions.map((transaction)=>{
      return <Transaction transaction={transaction} key={transaction.id}/>
    })
  }
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">
              Posted At
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Description
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Category
            </h3>
          </th>
          <th>
            <h3 className="ui center aligned header">
              Amount
            </h3>
          </th>
        </tr>

        {handleTransactions()}

      </tbody>
    </table>
  )
}

export default TransactionsList
