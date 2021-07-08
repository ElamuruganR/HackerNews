import './style.css';
import { Link } from 'react-router-dom';

export default function LoginLink() {
    return(
            <span className="pagetop">
                <Link to="login?goto=newest">login</Link>
            </span>
    )
}