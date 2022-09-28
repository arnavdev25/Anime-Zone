import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from "../styles/Home.module.css"
const Card = (e) => {
    const navigate=useNavigate()
    const WatchList=JSON.parse(localStorage.getItem("WatchList")) || [];
    const addToWatchList=(obj)=>{
      WatchList.push(obj);
      localStorage.setItem("WatchList",JSON.stringify(WatchList))
      alert("Item added successfully in watch list")
  }
  return (
    <div>
       <img alt="animal" src={e.images.jpg.image_url}/>
       <h5>Title : <span> {e.title}</span></h5>
       <h5>Rating : <span> {e.rating}</span></h5>
      <div>
      <button onClick={()=>addToWatchList(e)} className={style.btn}>Add to Watch List</button>
       <button onClick={()=>navigate(`anime/${e.mal_id}`)} >View More Details</button>
      </div>
    </div>
  )
}

export default Card