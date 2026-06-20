import Footer from './Footer.jsx'
import Container from './Container.jsx'
import Navigation from './Navigation.jsx'
import { useEffect } from "react";

export default function App() {
  return (
    <>
      {/* <h1>Hello React</h1> */}
      <Navigation/>
      <Container/>
      <Footer/>
    </>
  );
}