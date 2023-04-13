const Home = () =>{
    return(
        <>
        <div className="home-div">
        <h1 style={{textAlign:"center", color:"Green"}}> Home  </h1>
        <h3 style={{textAlign:"center", color:"Green"}}>Nested Routes </h3>
        <p style={{padding:"2rem"}}>Nested Routes are a powerful feature. While most people think React Router only routes a user from page to page, it also allows one to exchange specific fragments of the view based on the current route. For example, on a user page one gets presented multiple tabs (e.g. Profile, Account) to navigate through a user's information. By clicking these tabs, the URL in the browser will change, but instead of replacing the whole page, only the content of the tab gets replaced.</p>
        </div>
        
        </>
    )
}

export default Home