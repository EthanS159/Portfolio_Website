import Button from "../Format_Components/Button";
import download from "../../assets/icons/discord.png";
export default function HomePage(){
    return(
        <>
        <div className = "home-container">
            <h2 className = "introHeading">Welcome To My Site. Learn more about me as <br/> a person and a Developer</h2>
            <a href="User_Guide_2026.pdf" download="User_Guide_2026.pdf"><img src="download.png" alt="Download Guide"/></a>
            <Button 
            route = "/contact-me" 
            buttonText = "Contact Me"
            />
            <Button 
            route = "/portfolio" 
            buttonText = "View Portfolio"
            />
        </div>
        </>
    );
}