import React, {useState} from 'react';

export default function TransactionList() {
  
    const [transactions, setTransactions] = useState(
        [
            {
                'id': 1201,
                'name':'TCZ 121Z',
                'type':'debit',
                'amount':1723
            },
            {
                'id': 1203, 
                'name':'AARON WREN',
                'type':'credit',
                'amount':500
            },
            {
                'id': 1207, 
                'name':'THOMSON FAMILY CLINIC',
                'type':'debit',
                'amount':60
            },
            {
                'id': 1211, 
                'name':'F&J TRADING',
                'type':'debit',
                'amount':120.5
            }
        ]
    )

    function getTransactionColor(type)
    {
        if(type === "debit")
            return "red";
        else if(type === "credit")
            return "green";
        else 
            return "black"
    }

    function renderTransaction(){
        let renderList = [];
        for(let t of transactions)
        {
            let fragment = (<>
                <li style={{
                    color : getTransactionColor(t.type)
                }}>{t.name} - ${t.amount}</li>
            </>);
            renderList.push(fragment);
        }
        return renderList;
    }

    return (
        <React.Fragment>
            <ul>
                {renderTransaction()}
            </ul>
        </React.Fragment>
    )
  
}