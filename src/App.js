import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import Banner from "./component/Banner";
import ServicesExperience from "./component/ServicesExperience";
import Projects from "./component/Projects";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/> 
      <ServicesExperience/>
      <Projects />
      <Footer/>
    </div>
  );
}

export default App;
