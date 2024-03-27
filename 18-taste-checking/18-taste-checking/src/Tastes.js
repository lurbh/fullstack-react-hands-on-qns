import React, {useState} from 'react'

export default function Tastes () {

    const [selectedTastes, setSelectedTastes] = useState([]);

    const spicyOnClick = () =>{
      if(!selectedTastes.includes('spicy'))
      {
        const cloneSelectedTastes = selectedTastes.slice();
        cloneSelectedTastes.push('spicy');
        setSelectedTastes(cloneSelectedTastes);
      }
      else
      {
        const cloneSelectedTastes = selectedTastes.slice();
        const indexToRemove = cloneSelectedTastes.indexOf('spicy');
        cloneSelectedTastes.splice(indexToRemove,1)
        setSelectedTastes(cloneSelectedTastes);
      }
    }

    const sourOnClick = () =>{
      if(!selectedTastes.includes('sour'))
      {
        const cloneSelectedTastes = selectedTastes.slice();
        cloneSelectedTastes.push('sour');
        setSelectedTastes(cloneSelectedTastes);
      }
      else
      {
        const cloneSelectedTastes = selectedTastes.slice();
        const indexToRemove = cloneSelectedTastes.indexOf('sour');
        cloneSelectedTastes.splice(indexToRemove,1)
        setSelectedTastes(cloneSelectedTastes);
      }
    }

    const sweetOnClick = () =>{
      if(!selectedTastes.includes('Sweet'))
      {
        const cloneSelectedTastes = selectedTastes.slice();
        cloneSelectedTastes.push('Sweet');
        setSelectedTastes(cloneSelectedTastes);
      }
      else
      {
        const cloneSelectedTastes = selectedTastes.slice();
        const indexToRemove = cloneSelectedTastes.indexOf('Sweet');
        cloneSelectedTastes.splice(indexToRemove,1)
        setSelectedTastes(cloneSelectedTastes);
      }
    }

    return <React.Fragment>
      <input type="checkbox" value='spicy' checked={selectedTastes.includes('spicy')}/><label>Spicy</label>
      <input type="checkbox" value='sour'  checked={selectedTastes.includes('sour')}/><label>Sour</label>
      <input type="checkbox" value="Sweet"  checked={selectedTastes.includes('Sweet')}/><label>Sweet</label>
    
      <div>
        <button onClick={spicyOnClick}>Spicy</button>
        <button onClick={sourOnClick}>Sour</button>
        <button onClick={sweetOnClick}>Sweet</button>
      </div>
    </React.Fragment>
}


