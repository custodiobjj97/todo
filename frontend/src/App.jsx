import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card/card.jsx'
import "./App.css"

const App = () => {
    const baseUrl="http://localhost:8080"
    const [values,setValues]=useState();
    const [games,setGames]=useState([])

    const handleChangeValues=(event)=>{
        setValues((prevValues)=>({
            ...prevValues,[event.target.name]:event.target.value
        }))
    }

    const handleButtonClick=(value)=>{
        axios.post(`${baseUrl}/add`,{
            name:values.name,
            cost:values.cost,
            category:values.category
        }).then((res) =>{console.log(res)})
    }

    useEffect(()=>{
        axios.get(`${baseUrl}/games`).then((res) =>{setGames(res.data)})
    })    

    console.log(values)
    
  return (
    <>
    <div className='form-box'>
        <input type='text' name='name'  placeholder='Title' onChange={handleChangeValues}/>
        <input type='text' name='cost'  placeholder='Cost' onChange={handleChangeValues}/>
        <input type='text' name='category'  placeholder='Category' onChange={handleChangeValues}/>
        <button onClick={handleButtonClick}>add</button>
    </div>
     {games.map((game) =>{
        return <Card 
        key={game.id}
        id={game.id}
        name={game.name}
        cost={game.cost}
        category={game.category}/>
     })}
    </>
  )
}

export default App