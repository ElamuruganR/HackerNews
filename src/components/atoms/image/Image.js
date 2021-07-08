import './style.css';

export default function Image(props){
    return(
        <img 
            src={props.src} 
            className={props.className} 
            width={props.width} 
            height={props.height} 
            alt={props.alt} 
        />
    )
}