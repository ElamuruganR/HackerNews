import React, { useEffect, useState } from 'react';
import './style.css';
import Item from '../../molecules/item/Item';
import Anchor from '../../atoms/anchor/Anchor';
import { useLocation } from 'react-router-dom';
import QueryString from 'query-string';

export default function ItemList ({ids, max}) {
    const [pageNo, setPageNo] = useState(1);
    const start = (pageNo-1)*max;
    const end = pageNo*max;
    const location = useLocation();
    const queryParams = location.search ? QueryString.parse(location.search): null;
    
    useEffect(()=>{
        if(queryParams && queryParams.p !== pageNo) {
            setPageNo(Number(queryParams.p));
        }
    },[])

    return(
        <table border="0" cellPadding="0" cellSpacing="0" className="itemList">
        <tbody>
            {
                ids?.slice(start,end).map((id, index)=>{
                    return (
                    <Item key={id} id={id} sno={index+start}/>
                );
              })
            }
          <tr className="morespace"></tr>
          <tr>
            <td colSpan="2"></td>
            <td>
                {ids.length>end && <Anchor url={`${location.pathname}?p=${pageNo+1}`} className="morelink" rel="next" >More</Anchor>}
            </td>
          </tr>
        </tbody>
      </table>
      );
}