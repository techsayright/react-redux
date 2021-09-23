import { useSelector } from 'react-redux';
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  console.log('app');
  const isAuth = useSelector(state=> state.auth.isLogged)
  return (
    <div className="App">
      <Header/><br/>
      {!isAuth && <Login/>}
      {isAuth && <Home/>}
      {isAuth && <Counter/>}
    </div>
  );
}

export default App;
