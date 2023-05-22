import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './component/NavBar';
import "./style/navBar.css";
function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}


export default App;
