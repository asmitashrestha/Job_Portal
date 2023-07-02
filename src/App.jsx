import "./App.css";
import Categories from "./components/Categories";
import Home from "./components/Home";
import Listedjob from "./components/Listedjob";
import Navbar from "./components/Navbar";
import Jobstitle from "./components/Jobstitle";
import View from "./components/View";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Categories name="Popular Categories" />
      <Listedjob />
      <div className="listed">
        <div className="list">
          <Jobstitle
            para="Match Company Limited"
            title="Fresher UI/UX Designer (3 Year Exp.)"
          />
        </div>
        <div className="list">
          <Jobstitle
            para="Match Company Limited"
            title="Fresher UI/UX Designer (3 Year Exp.)"
          />
        </div>
        <div className="list">
          <Jobstitle
            para="Match Company Limited"
            title="Fresher UI/UX Designer (3 Year Exp.)"
          />
        </div>
        <div className="list">
          <Jobstitle
            para="Match Company Limited"
            title="Fresher UI/UX Designer (3 Year Exp.)"
          />
        </div>
        <div className="list">
          <Jobstitle
            para="Match Company Limited"
            title="Fresher UI/UX Designer (3 Year Exp.)"
          />
        </div>
      </div>

      <View/>
    </div>
  );
}

export default App;
