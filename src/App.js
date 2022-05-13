import 'bootstrap/dist/css/bootstrap.min.css';


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
    </div>
  );
}

export default App;
