import React, {useState} from 'react'

const itemPrices= {
  "beef" : 12.00,
  "chicken" : 7.50,
  "fish" : 10.00,
  "mushrooms" : 5.50,
  "spinach" : 2.50
}

export default function Buffet() {

    const [items, setItems] = useState([]);

    const calculateTotal = () => {
      let total = 0;
      for(let i of items)
      {
        total += itemPrices[i];
      }
      return total;
    }

    const handleBoxChange = (e) => {
      const { value, checked } = e.target;
      if (checked)
        if(items.length  > 0)
          setItems([...items, value]);
        else
          setItems([value]);
      else
      {
        let foodarray = items.filter((item) => item !== value)
        setItems(foodarray);
      }

    }

    return (
      <React.Fragment>
          <div>
            <input type="checkbox" name="orders" value="beef" onChange={handleBoxChange} checked={items.includes('beef')}/><label>Shabu Shabu Beef</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="chicken" onChange={handleBoxChange} checked={items.includes('chicken')}/><label>Chicken Fillet</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="fish" onChange={handleBoxChange} checked={items.includes('fish')}/><label>Fish Fillet</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="mushrooms" onChange={handleBoxChange} checked={items.includes('mushrooms')}/><label>Assorted mushhrooms</label>
          </div>
          <div>
            <input type="checkbox" name="orders" value="spinach" onChange={handleBoxChange} checked={items.includes('spinach')}/><label>Spinach</label>
          </div>
          <h1>Total:{calculateTotal()}</h1>
      </React.Fragment>
    )
}
  
