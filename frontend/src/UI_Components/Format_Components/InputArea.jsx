export default function InputArea({labelText, InputType, InputClass, InputId, InputPlaceholder, onChangeHandler, InputValue}){

    return(
        <div className = "inputArea">
            <label>
                {labelText} 
            </label>
            <br/>
            <input type = {InputType}className = {InputClass} id = {InputId} placeholder = {InputPlaceholder} onChange = {onChangeHandler} value = {InputValue || ""} required
            />
            <br/>
        </div>
    );
}