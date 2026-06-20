import Footer from './Footer.jsx'
import Container from './Container.jsx'
import Navigation from './Navigation.jsx'
import { useEffect } from "react";

export default function App() {
  return (
    <>
      <Navigation/>
      <Container/>
      <Footer/>
    </>
  );
}