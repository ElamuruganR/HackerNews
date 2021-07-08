import './style.css';

export default function Form(props) {
    return(
        <form method={props.method} action={props.action} className={props.className}>
            {props.children}
        </form>
    )
}