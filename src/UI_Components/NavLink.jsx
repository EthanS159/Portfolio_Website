export default function NavLink({isActiveTab, route, content}){
    return(
        <button isAciveTab = {false} style = {isActiveTab == true ? {border:'2px solid black'} : {border:'none'}} className = "nav-button"><a href = {route}>{content}</a></button>
    );
}