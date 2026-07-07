export default function Form({formId, formRequest, content}){

    return(
        <>
            <form 
            id = {formId} 
            onSubmit = {formRequest}
            >
                {content}
            </form>
        </>
    );
}