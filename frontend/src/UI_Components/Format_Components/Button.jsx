export default function Button({buttonText, buttonType, buttonClass, buttonId, route}){
    return(
        <>
        <button type = {buttonType} className = {buttonClass} id = {buttonId}>
            <a href={route}>{buttonText}</a>
        </button>
        </>
    );
}