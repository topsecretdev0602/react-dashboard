import React from 'react'
import "./transactionWidget.css"

export default function TransactionWidget() {

  const Button = ({ type }) => {
    return <button className={"transactionButton " + type}>{type}</button>;
  };

  return (
    <div className="transactionWidget">
      <span className="title">Latest transactions</span>
      <table className="transactionTable">
        <tr className="transactionRow">
          <th className="transactionHeader">Customer</th>
          <th className="transactionHeader">Date</th>
          <th className="transactionHeader">Amount</th>
          <th className="transactionHeader">Status</th>
        </tr>
        <tr className="transactionRow">
          <td className="user">
            <img src="https://avatarfiles.alphacoders.com/693/thumb-1920-69306.jpg" alt="" className="userImage"/>
            <span className="userName">Homer Simpson</span>
          </td>
          <td className="transactionDate">2 Jun 2021</td>
          <td className="transactionAmount">$53.00</td>
          <td className="transactionStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="transactionRow">
          <td className="user">
            <img src="https://static.simpsonswiki.com/images/0/0b/Marge_Simpson.png" alt="" className="userImage" />
            <span className="userName">Marge Simpson</span>
          </td>
          <td className="transactionDate">2 Jun 2021</td>
          <td className="transactionAmount">$122.00</td>
          <td className="transactionStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="transactionRow">
          <td className="user">
            <img src="https://static.simpsonswiki.com/images/6/65/Bart_Simpson.png" alt="" className="userImage" />
            <span className="userName">Bart Simpson</span>
          </td>
          <td className="transactionDate">3 Jun 2021</td>
          <td className="transactionAmount">$84.00</td>
          <td className="transactionStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="transactionRow">
          <td className="user">
            <img
              src="https://static.simpsonswiki.com/images/b/bd/Homer_Simpson.png" alt="" className="userImage" />
            <span className="username">Homer Simpson</span>
          </td>
          <td className="transactionDate">4 Jun 2021</td>
          <td className="transactionAmount">$22.00</td>
          <td className="transactionStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  )
}
