import { useEffect, useState } from "react";
import Axios from 'axios';

export function useAxios(initialState, endpoint, dependencies=[]) {
    const [data, setData] = useState(initialState);
  
    useEffect(async()=>{
      await Axios.get(`https://hacker-news.firebaseio.com/v0/${endpoint}`)
                 .then(res => {setData(res.data); console.log("Custom Hooks Response:", res.data)})
                 .catch(err => console.log(err.message))
    }, dependencies)
    
    return [data];
    
}