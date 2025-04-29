import { Link } from "react-router-dom"
import './style/navpar.css'
function Navbar(){
    return(
        <>
        <div className="navpar">
            <div className="boxLinks" >
                <Link to={'/'} className="link">Home</Link>
                <Link to={'/profile'}className="link">profile</Link>
                <Link to={"/chat"}className="link">chat</Link>
            </div>
            <div className="boxSearch">
                <input type="text" placeholder="Search"/>
                <button className="searchbtn" type="button" >search</button>
            </div>
        </div>
        </>
    )
}
export default Navbar