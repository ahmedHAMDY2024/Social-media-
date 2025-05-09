import { Link } from "react-router-dom"
import './style/navpar.css'
function Navbar(){
    return(
        <>
        <div className="navpar">
            <div className="boxLinks" >
                <Link to={'/Home'} className="link">Home</Link>
                <Link to={'/profile'}className="link">profile</Link>
                <Link to={"/chat"}className="link">chat</Link>
            </div>
            <div className="boxSearch">
                <input type="text" placeholder="Search"/>
                <button className="searchbtn" type="button" >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                    </svg>
                </button>
            </div>
        </div>
        </>
    )
}
export default Navbar