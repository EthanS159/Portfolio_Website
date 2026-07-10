import Button from ".//Button";
export default function Form({formId, formRequest, content, button}){

    return(
        <form id = {formId} onSubmit = {formRequest}>
            {content}
            {button}
        </form>
    );
}