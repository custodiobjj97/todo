import axios from 'axios'
import React from 'react'

const Card = (props) => {
   
    const handleDelete=()=>{
        axios.delete(`http://localhost:8080/delete/${props.id}`)
    }
  return (
    <div  className='cards'>
       <div className='card' id={props.id}>
          <h3>{props.name}</h3>
          <h4>${props.cost}</h4>
          <p>{props.category}</p>
          <button onClick={handleDelete}>delete</button>
       </div>
    </div>
  )
}

export default Card