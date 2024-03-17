
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Slider from"./Components/Slider"
import Value from "./Components/Value";
import Footer from "./Components/Footer";
import ContactUs from "./Components/ContactUs";
import Contact from "./Components/LinkPage.jsx/Contact.Jsx";
import AboutUs from  "./Components/LinkPage.jsx/AboutUs"
import Values from "./Components/LinkPage.jsx/Values.Jsx";
function App() {
 

  return (
    <BrowserRouter>
    <Header/>
    <Hero/>
    <Slider/>
    <Value/>
    <ContactUs/>
    <Footer/>
      <Routes>
      
         
      
          <Route path="/about" component={<AboutUs/>} />
          <Route path="/contact" component={<Contact/>} />
          <Route path="/residence" component={<Slider/>} />
          <Route path="/value" component={<Values/>} />
         </Routes>
    </BrowserRouter>
  );
}

export default App;

