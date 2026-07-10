export default function NavLink({isactivetab = false, route, content}){
    return(
        <button 
        isactivetab
        style = {isactivetab == true ? 
        {borderBottom:'2px solid #48cae4', WebkitTextStroke:' 1px #48cae4', BoxShadow: '0 0 10px'} : {border:'none'}} 
        className = "nav-button">
            <a href = {route}>{content}</a>
        </button>
    );
}

//   box-shadow: 
//     0 0 10px #ff0055,        /* Outer tight glow */
//     0 0 30px #ff0055,        /* Outer broad glow */
//     inset 0 0 15px #ff0055;  /* Inner edge glow */