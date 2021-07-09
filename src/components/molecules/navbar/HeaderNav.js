import './headernav.css';
import {useLocation} from 'react-router-dom';
import Anchor from '../../atoms/anchor/Anchor';

export const NavTexts = ["new", "top", "best", "ask", "show", "jobs"] ;
    

export default function HeaderNav(){
    const location = useLocation();
    const getStatus = (tabName)=>{
        return location.pathname.split('/')[1] === tabName;
    }
    return(
            <span className="pagetop">
                <b className="hnname">
                    <Anchor url="news">Hacker News </Anchor>
                </b>
                {NavTexts.map(navText => {
                    return (
                        <Tab url={navText} text={navText} active={getStatus({navText})}/>
                    )
                })}
            </span>
    )
}
export function Tab({active, url, text, seperation}) {
    const anchorWthSpace = (<>
                                <Anchor url={url}>{text}</Anchor>
                                &nbsp;|&nbsp;
                            </>);
                
    if (active) {
        return (
            <span className="topsel">
                {anchorWthSpace}
            </span>
        )
    } else {
        return anchorWthSpace;
    }
}