
# Nested Routes


[![Hosted link](https://main--splendorous-tarsier-518a88.netlify.app/)](https://main--splendorous-tarsier-518a88.netlify.app/)
Nested Routes are a powerful feature. While most people think React Router only routes a user from page to page, it also allows one to exchange specific fragments of the view based on the current route. For example, on a user page one gets presented multiple tabs (e.g. Profile, Account) to navigate through a user's information. By clicking these tabs, the URL in the browser will change, but instead of replacing the whole page, only the content of the tab gets replaced.

In the following we will recreate this scenario with React Router. To illustrate how this works and how you can implement nested routes step by step in React yourself, we will start off with the following example:
```javascript
import { Routes, Route, Link } from 'react-router-dom';

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

        <Route path='/Contact' element={isloggedin ? <Contact/> :       <Navigate to="/" />}/>
        <Route path='*' element={<NoPageFound/>}/>
</Routes>
     
```
We will continue working on the Technologies component, because this is the place where we want to have the nested routing via tabs. Therefore, we will instantiate a new set of Link components (which will be our unstyled tabs) which navigate a between the Technologies tabs.
```javascript
const Technologies = () =>{
    return(
        <>
           <div className="tech-container">
              <div className="left-panel">
                 <Link style={{ color: '#FFF', textDecoration:"none" }} to="html">HTML</Link>
                 <Link style={{ color: '#FFF', textDecoration:"none" }} to="css">CSS</Link>
                 <Link style={{ color: '#FFF', textDecoration:"none" }} to="js">JavaScript</Link>
                 <Link style={{ color: '#FFF', textDecoration:"none" }} to="react">REACT</Link>
              </div>
              <div className="right-panel">
               <Outlet/>
              </div>
           </div>
        </>
    )
}
```