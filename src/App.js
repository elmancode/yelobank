

import { Form, Route, Routes } from "react-router-dom"  
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Business from "./pages/Business";
import Onlineservice from "./pages/Onlineservice";
import ATMandbranchs from "./pages/ATMandbranchs";
import Menu from "./pages/Menu";
import Credits from "./pages/Credits";
import Cards from "./pages/Cards";
import Deposit from "./pages/Deposit";
import Cashback from "./pages/Cashback";
import AllNews from "./pages/AllNews";
import AwardNews from "./pages/AwardNews";
import BirthdayNews from "./pages/Birthdaynews";
import Footer from "./components/Footer";
import Onlinecredit from "./pages/Onlinecredit";





function App() {


  return (
    <div className="App">

      <Header/>
    

      <Routes>
        <Route path = "/" element= {<Home />} />
        <Route path = "/business" element= {<Business />} />
        <Route path = "/about" element= {<About />} />
        <Route path ="/onlineservice" element = { <Onlineservice />}/>
        <Route path ="/atm-and-branchs" element = { <ATMandbranchs /> }/>
        <Route path ="/menu" element = { <Menu /> }/>
        <Route path ="/credits" element = { <Credits /> }/>
        <Route path ="/cards" element = { <Cards /> }/>
        <Route path ="/deposit" element = { <Deposit /> }/>
        <Route path ="/cashback" element = { <Cashback /> }/>
        <Route path ="/allnews" element = { <AllNews /> }/>
        <Route path ="/AwardNews" element = { <AwardNews /> }/>
        <Route path ="/birthdayNews" element = { <BirthdayNews /> }/>
        <Route path ="/onlinecredit" element = { <Onlinecredit /> }/>
      </Routes>
    
      <Footer/>
      
     
    



    </div>

    
  );
}

export default App;
