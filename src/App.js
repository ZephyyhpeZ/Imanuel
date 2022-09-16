import './App.css';
import Navbar from './components/Navbar';
import Line from './components/line';
import Introduction from './components/Introduction';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { ReactComponent as Barcode} from './assets/barcode.svg';
import {useState, useEffect} from "react";
import styled, {ThemeProvider} from "styled-components"
import {lightTheme, darkTheme, GlobalStyle} from "./components/theme.js";



const StyledApp = styled.div``;

function App() {
  useEffect(() => {
    document.title = "Imanuel"
  }, [])

  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  return (
    <ThemeProvider theme = {theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle/>
      <StyledApp className="App">
        <Navbar setTheme={toggleTheme} className="margin" />
        <div className="barcode"><Barcode/></div>
        
        
        <div className="content">

        <Line/>

        <Introduction/>

        <About/>
        
        <Projects/>

        <Footer/>

        </div>
          
          
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
