import { useEffect, useState } from "react";
import Axios from 'axios';

export function useAxios(category, name, initialState) {
    const [data, setData] = useState(initialState);
  
    let endpoint;
  
    if(category === 'story') {
      endpoint = `${name}stories`;
    } else if (category === 'item') {
      endpoint = `item/${name}`;
    }
  
    useEffect(async()=>{
      await Axios.get(`https://hacker-news.firebaseio.com/v0/${endpoint}.json`)
                 .then(res => {setData(res.data); console.log("Custom Hooks Response:", res.data)})
                 .catch(err => console.log(err.message))
    },[])
    return [data];
    
  }