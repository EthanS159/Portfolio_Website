export default function Button({buttonText, buttonType, buttonClass, buttonId}){
    return(
        <>
        <button type = {buttonType} className = {buttonClass} id = {buttonId}>
            {buttonText}
        </button>
        </>
    );
}