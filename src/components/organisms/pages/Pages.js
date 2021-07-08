import './style.css';
import ItemList from '../itemlist/ItemList';
import { useAxios } from '../../customhooks/UseAxios';

export function Page({name}) {
  const [data] = useAxios('story', name, []);
  const max = 30;
    
  return(
      <>
        <ItemList ids={data} max={max} />
      </>
  );
}

export function News(){
  return(
    <Page name="new" />
  )
}
  export function New(){
    return(
      <Page name="new" />
    )
  }
  export function Top(){
    return(
      <Page name="top" />
    )
  }
  export function Best(){
    return(
      <Page name="best" />
    )
  }
  export function Ask(){
    return(
      <Page name="ask" />
    )
  }
  export function Show(){
    return(
      <Page name="show" />
    )
  }
  export function Jobs(){
    return(
      <Page name="job" />
    )
  }