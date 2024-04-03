import React, {useState} from 'react'

export default function GuestList() {

    const [guests, setGuests] = useState(
        [
            'Tony Stark',
            'Hawkeye',
            'Spider Man',
            'Bruce Wayne'
        ]
    )

    function renderGuestList() {
        let guestList = [];
        for(let g of guests)
        {
            let listFragment = (<>
                <li>{g}</li>
            </>)
            guestList.push(listFragment);
        }
        return guestList;
    }

    return (
        <React.Fragment>
            <ul>
                {!guests.length < 1 ? renderGuestList() : <p>Loading...</p> } 
            </ul>
        </React.Fragment>
    )
}