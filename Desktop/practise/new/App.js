// import logo from './logo.svg';
import './App.css';
import AppHeader from './components/AppHeader'
import values from './components/Game';


function App() {
  return (
    <div>
    <AppHeader/>
    <values.Game/>
    </div>
  );
}

export default App;