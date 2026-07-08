import Button from ".//Button";
export default function Form({formId, formRequest, content}){

    return(
        <form id = {formId} onSubmit = {formRequest}>
            {content}
            <Button
            buttonText = "Submit"
            buttonType = "submit"
            buttonClass = "submitButton"
            />
        </form>
    );
}