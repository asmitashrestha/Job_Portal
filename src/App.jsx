import "./App.css";
import Navbar from "./components/Home/Navbar";
import Title from "./components/Postajob/Title";
import Footer from "./components/Home/Footer"
import Homefinal from "./components/Home/Homefinal";
import Jobview from "./components/Postajob/Jobview";

function App() {
  return (
    <div>
      <Navbar/>
      <Title/>
      <Jobview/>
      <Footer/>
    </div>
  );
}

export default App;
