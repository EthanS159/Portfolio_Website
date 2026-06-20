
import discord from '../assets/icons/discord.png'
import github from '../assets/icons/github.png'
import instagram from '../assets/icons/instagram.png'
import linkedin from '../assets/icons/linkedin.png'
import twitter from '../assets/icons/twitter.png'

let socials = [
    {
        name:"Discord",
        link:"https://discord.com/users/1011034660106674347",
        icon:discord
    },
    {
        name:"GitHub",
        link:"https://github.com/EthanS159",
        icon:github
    },
    {
        name:"Instagram",
        link:"https://www.instagram.com/ethans0721/",
        icon:instagram
    },
    {
        name:"LinkedIn",
        link:"https://www.linkedin.com/in/ethan-sarante/",
        icon:linkedin
    },
    {
        name:"Twitter",
        link:"https://x.com/EthanSaran10403",
        icon:twitter
    }
];

export default function Footer(){
    return(
        <footer className="footer">
            <small>&copy; 2026 Ethan Sarante. All rights reserved.</small>
            <div className="socialIcons">
                {socials.map((social) => {
                    return(
                        <a href = {social.link} target = "_blank"> <img src={social.icon} className = "icon" alt = {social.name}/> </a>
                    );
                })}
            </div>
        </footer>
    );
}