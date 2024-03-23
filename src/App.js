import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Main from './page/Main';
import Write from './page/Write';
import Story from './page/Story';
import Modify from './page/Modify';


function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <div className='black-nav'>
        <h2 style={{cursor:'pointer'}} onClick={()=>{navigate('/')}}>SorryBlog</h2>
      </div>
      <Routes>
        <Route path='/' element={ <Main />}/>
        <Route path='/write' element ={<Write/>}/>
        <Route path='/story/:id' element = {<Story/>}></Route>
        <Route path='/modify/:id' element = {<Modify/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
