import { Outlet, Link } from "react-router-dom";
const Layout = () => {
    return ( 
        <>
         <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor:"pink"}}>
  <div class="container-fluid">
  <img src="https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?size=626&ext=jpg&uid=R107709791&ga=GA1.2.556309063.1687533940&semt=sph" alt="myimage" width="60px" height="60px" />
    <a class="navbar-brand" href="#">Travel Website</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Explore</a></li>
            <li><a class="dropdown-item" href="#">Book Package</a></li>
            <li><hr class="dropdown-divider"></hr></li>
            <li><a class="dropdown-item" href="#">Contact Us</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <Link to="/"><button type="submit" class="btn" style={{backgroundColor:"#9eeaf9"}} href="home.html">Home</button></Link>
        <Link to="/destination"><button type="submit" class="btn" style={{backgroundColor:"#9eeaf9"}} href="destination.html">Destination</button></Link>
        <Link to="/aboutus"><button type="submit" class="btn" style={{backgroundColor:"#9eeaf9"}} href="aboutus.html">About Us</button></Link>
        <Link to="/login"><button type="submit" class="btn" style={{backgroundColor:"#9eeaf9"}} href="login.html">Login</button></Link>
        
      </form>
    </div>
  </div>
</nav>
  
        <Outlet />
      </>
     );
}
 
export default Layout;