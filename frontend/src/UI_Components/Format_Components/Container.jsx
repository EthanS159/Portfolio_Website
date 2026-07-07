import HomePage from '../Pages/HomePage.jsx'
import AboutMePage from '../Pages/AboutMePage.jsx'
import PortfolioPage from '../Pages/PortfolioPage.jsx'
import ContactMePage from '../Pages/ContactMePage.jsx'
import {navRouting} from './Navigation.jsx'

export default function Container(){
    let currPath = window.location.pathname;

    let page = navRouting.find(
        nav => nav.route === currPath
    );

    return(
        <main className = "container">
            {page ? page.content : <h1>Error 404</h1>}
        </main>
    );
}