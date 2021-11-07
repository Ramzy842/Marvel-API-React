import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";

import Characters from "./Pages/Characters";
import Comics from "./Pages/Comics";
import About from "./Pages/About";
import Error from "./Pages/Error";
import SingleComic from "./Pages/SingleComic";
import SingleCharacter from "./Pages/SingleCharacter";
import Home from "./Pages/Home";
import CharacterSearchForm from "./Components/CharacterSearchForm";
import ComicSearchForm from "./Components/ComicSearchForm";
import Footer from "./Components/Footer";
import MCUAvengers from "./Pages/MCUAvengers";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <div className="home-page">
            <Home />
            <Footer />
          </div>
        </Route>
        <Route path="/mcu-avengers/characters">
          <div className="mcu-page">
            <MCUAvengers />
            <Footer />
          </div>
        </Route>
        <Route exact path="/characters/:id">
          <div className="single-character-page">
            <SingleCharacter />
            <Footer />
          </div>
        </Route>
        <Route exact path="/characters">
          <CharacterSearchForm />
          <div className="char-page">
            <Characters />
            <Footer />
          </div>
        </Route>
        <Route exact path="/comics/:id">
          <div className="single-comic-page">
            <SingleComic />
            <Footer />
          </div>
        </Route>
        <Route exact path="/comics">
          <ComicSearchForm />
          <div className="comics-page">
            <Comics />
            <Footer />
          </div>
        </Route>

        <Route exact path="/about">
          <div className="about-page">
            <About />
            <Footer />
          </div>
        </Route>
        <Route path="*">
          <div className="error-page">
            <Error />
            <Footer />
          </div>
          
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
