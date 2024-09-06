import logo from './logo.svg';
import './App.css';

import Menu from './Components/Menu';
import Container from './Components/Container';

function App() {
  return (
    <div className="App">
      
      <Menu/>    {/*  loading menu.js file in app.js file*/ }
      <Container/>
    </div>
  );
}

export default App;
