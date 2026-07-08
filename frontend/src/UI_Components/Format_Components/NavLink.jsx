export default function NavLink({isactivetab, route, content}){
    return(
        <button 
        isactivetab = "false" 
        style = {isactivetab == true ? {borderBottom:'2px solid #48cae4', WebkitTextStroke:' 1px #48cae4'} : {border:'none'}} 
        className = "nav-button">
            <a href = {route}>{content}</a>
        </button>
    );
}