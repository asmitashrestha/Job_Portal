import "./App.css";
import Categories from "./components/Home/Categories";
import Home from "./components/Home/Home";
import Listedjob from "./components/Home/Listedjob";
import Navbar from "./components/Home/Navbar";
import Jobstitle from "./components/Home/Jobstitle";
import View from "./components/Home/View";
import Footer from "./components/Home/Footer";
import CategoryItem from "./components/Home/CategoryItem";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Categories name="Popular Categories" />
      <div className="cat">
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
        <CategoryItem value="Technology" />
      </div>

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
      <View />
      <Footer />
    </div>
  );
}

export default App;
