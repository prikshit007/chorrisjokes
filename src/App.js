
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import {Category} from './Components/Category';

function App() {
  const [categories,setCategories]=useState([]);
  const [selectedCategoryName,setSelectedCatgoryName]=useState("");
  const[categoryValue,setCategoryValue]=useState("");
  

  


   useEffect(()=>{
    axios.get(`https://api.chucknorris.io/jokes/categories`)
    .then(res=>{
      setCategories(res.data);
      console.log(res.data);
    })

   },[]) 

   const fetchCategory=(category)=>{
    axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
        .then(res=>{
            console.log(res?.data);
            setCategoryValue(res?.data.value);
        }).catch(err=>{
          console.log(err);
        })
   }
   const selectCategoryHandler=(e,category)=>{
    setSelectedCatgoryName(category);
     fetchCategory(category);
   }

  return (
    <div className="App">
      
    <ul className="grid-container">
    {categories?.map((category,index)=>{
     return<li className="grid-item" key={index}> <Category category={category} selectCategoryHandler={selectCategoryHandler}/></li>
    })}
    </ul>
    {selectedCategoryName && <div className="category">
    
      <h6 className="title">Select Category: {selectedCategoryName.toUpperCase()}</h6>
      
      <div className="text"> <p>{categoryValue}</p></div>
   
      <button className='new' onClick={()=>fetchCategory(selectedCategoryName)}>New Joke</button>
      </div>
     
 
    }
    </div>
  );
}

export default App;
