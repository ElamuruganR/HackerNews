export default function Anchor(props) {
    return(
        <a 
            href={props.url} 
            className={props.className} 
            id={props.id} 
            rel={props.rel}
        >
            {props.children}
        </a>
    )
}