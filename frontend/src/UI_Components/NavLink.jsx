export default function NavLink({isActiveTab, route, content}){
    return(
        <button isAciveTab = {false} style = {isActiveTab == true ? {borderBottom:'2px solid #48cae4', webkitTextStroke:' 1px #48cae4'} : {border:'none'}} className = "nav-button"><a href = {route}>{content}</a></button>
    );
}