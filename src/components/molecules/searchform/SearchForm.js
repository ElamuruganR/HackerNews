import './style.css';
import Form from '../../atoms/form/Form';
import Input from '../../atoms/input/Input';

export default function SearchForm(props) {
    return(
        <Form method="get" action="//hn.algolia.com/" className="margin-block-end-1em">
            Search: <Input 
                        type="text" 
                        className={props.inputClass}
                        name="q" 
                        value="" 
                        size="17" 
                        autoCorrect="off"
                        spellCheck="false"
                        autoCapitalize="off" 
                        autoComplete="false" 
                        onChange={()=>{}}
                    />
        </Form>
    )
}