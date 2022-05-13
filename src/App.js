import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Router from './Router/Router';

function App() {
  return (
    <div className="App">
<NavBar/>
<Router/>
<Footer/>
<h1 className="text-3xl font-bold underline font-sans hover:font-serif">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
