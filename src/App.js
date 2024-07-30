import './App.css';
import Login from './Component/Login';
import User from './Component/User';


function App() {
  const auth = localStorage.getItem("user")
  return (
    <div className="App">
      {auth ? <User/> :<Login/>}
    </div>
  );
}

export default App;
