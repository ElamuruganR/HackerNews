import './style.css';

export default function Input(props) {
    return(
        <input 
            type={props.type}
            name={props.name} 
            value={props.value}
            size={props.size}
            autoCorrect={props.autoCorrect} 
            spellCheck={props.spellCheck}
            autoCapitalize={props.autoCapitalize}
            autoComplete={props.autoComplete}
            onChange={props.onChange}
        />
    )
}