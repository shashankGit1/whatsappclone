import './App.css';
import './Components/Sidebar'
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
function App() {
  return (
    //BEM naming convention
    <div className="app">
    
      <div className="app__body">
        <Sidebar/>
        <Chat/>
      </div>
       
    </div>
  );
}

export default App;
