
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Technologies from './components/Technologies';
import Home from './components/Home';
import Contact from './components/Contact';
import Html from './components/Html';
import Css from './components/Css';
import Js from './components/Js';
import React from './components/React';
import Login from './components/Login';
import { myContext } from './components/Context';
import { useContext } from 'react';
import NoPageFound from './components/NoPageFound';
import Protect from './components/Protect';
function App() {
  const {isloggedin} = useContext(myContext);

  return (
    <div className="App">
    {isloggedin ? <Nav/> : null}
    
      <Routes>
      <Route path='/' element={isloggedin ? <Home/> : <Login/>}/>
        <Route path='/home' element={<Home/>}/>

        <Route path='/Technologies' element={<Protect><Technologies/></Protect>}>
           <Route path='' element={<Navigate to="html"/>}/>
           <Route path='html' element={<Html/>}/>
           <Route path='css' element={<Css/>}/>
           <Route path='js' element={<Js/>}/>
           <Route path='react' element={<React/>}/>
        </Route>

        <Route path='/Contact' element={isloggedin ? <Contact/> : <Navigate to="/" />}/>
        <Route path='*' element={<NoPageFound/>}/>
      </Routes>
     
      
    </div>
  );
}

export default App;
