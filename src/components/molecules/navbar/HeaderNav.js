import './headernav.css';
import {Link, useLocation} from 'react-router-dom';
import Anchor from '../../atoms/anchor/Anchor';

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
                <Tab url="newest" text="new" active={getStatus('newest')}/>
                <Tab url="top" text="top" active={getStatus('top')} />
                <Tab url="best" text="best" active={getStatus('best')} />
                <Tab url="ask" text="ask" active={getStatus('ask')} />
                <Tab url="show" text="show" active={getStatus('show')} />
                <Tab url="jobs" text="jobs" active={getStatus('jobs')} />
            </span>
    )
}
export function Tab({active, url, text}) {
    if (active) {
        return (
            <span className="topsel">
                <Anchor url={url}>{text}</Anchor>&nbsp;
                |&nbsp;
            </span>
        )
    } else {
        return(
            <>
                <Anchor url={url}>{text}</Anchor>&nbsp;
                |&nbsp;
            </>
        )
    }
}