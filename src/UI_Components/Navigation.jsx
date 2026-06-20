import NavLink from './NavLink.jsx'
import HomePage from './HomePage.jsx'
import AboutMePage from './AboutMePage.jsx'
import PortfolioPage from './PortfolioPage.jsx'
import ContactMePage from './ContactMePage.jsx'
import Container from './Container.jsx'

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
            isActiveTab = {window.location.pathname == navLink.route ? true : false}
            route = {navLink.route}
            content = {navLink.title}
            />
          );
        })}
      </nav>
  );
}
