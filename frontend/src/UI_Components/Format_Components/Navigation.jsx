import HomePage from '../Pages/HomePage.jsx'
import AboutMePage from '../Pages/AboutMePage.jsx'
import PortfolioPage from '../Pages/PortfolioPage.jsx'
import ContactMePage from '../Pages/ContactMePage.jsx'
import Container from './Container.jsx'
import NavLink from './NavLink.jsx'

export let navRouting = [
  {
    title:"Home",
    route:"/home",
    content: <HomePage/>
  },
  {
    title:"About Me",
    route:"/about-me",
    content: <AboutMePage/>
  },
  {
    title:"Portfolio",
    route:"/portfolio",
    content: <PortfolioPage/>
  },
  {
    title:"Contact Me",
    route:"/contact-me",
    content: <ContactMePage/>
  } 
];

export default function Navigation() {
  return(
      <nav className = "nav">
        {navRouting.map((navLink) => {
          return(
            <NavLink
            key = {navLink.route}
            isactivetab = {window.location.pathname == navLink.route ? true : false}
            route = {navLink.route}
            content = {navLink.title}
            />
          );
        })}
      </nav>
  );
}
