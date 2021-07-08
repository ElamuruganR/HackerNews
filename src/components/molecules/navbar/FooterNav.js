import './footernav.css';
import Anchor from '../../atoms/anchor/Anchor';

export default function FooterNav(){
    return(
        <span className="yclinks">
            <Anchor url="www.google.com">Guideliness</Anchor>&nbsp;
            |&nbsp;
            <Anchor url="#">FAQ</Anchor>&nbsp;
            |&nbsp;
            <Anchor url="#">Lists</Anchor>&nbsp;
            |&nbsp;
            <Anchor url="#">API</Anchor>&nbsp;
            |&nbsp;
            <Anchor url="#">Security</Anchor>&nbsp;
            |&nbsp;
            <Anchor url="#">Legal</Anchor>&nbsp;
            |&nbsp;
            <Anchor url="#">Aply to YC</Anchor>&nbsp;
            |&nbsp;
            <Anchor url="#">Contact</Anchor>
        </span>
    )
}