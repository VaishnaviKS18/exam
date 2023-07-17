import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import Layout from "./components/Layout";
import Home from "./components/Home";
 
import Destination from "./components/Destination";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
 
const App = ()=>{
  return(
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Destination" element={<Destination />} />
          <Route path="AboutUs" element={<AboutUs />} />
          <Route path="Login" element={<Login />} />
           
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;