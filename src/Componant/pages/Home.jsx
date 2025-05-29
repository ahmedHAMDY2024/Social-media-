import '../style/Home.css'
import CreatePost from './Create_Poste'
const postes = [{
    name: "Mohamed ",
    srcuser:"https://tse2.mm.bing.net/th?id=OIP.bPHIW2pOvehoq9tC3ysh7wHaE8&pid=Api&P=0&h=220",
    srcpost:"https://img.youtube.com/vi/U29r1VtEKg8/hqdefault.jpg",
    like: '2M' ,
    Comment: '101K',
    caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt accusamus illum sit suscipit a rem illo eius consequatur aliquid, doloremque aperiam? Perspiciatis exercitationem nam libero minus. Magnam, commodi natus?"
  },{
    name: "salah  ",
    srcuser:"https://tse2.mm.bing.net/th?id=OIP.JRLeUKqMc6-JLoFByCHxOAHaFj&pid=Api&P=0&h=220",
    srcpost:"https://tse3.mm.bing.net/th?id=OIP.j4ibUt2zsK-lersKehV6hAHaE8&pid=Api&P=0&h=220",
    like: '1M' ,
    Comment: '26K',
    caption:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt accusamus illum sit suscipit a rem illo eius consequatur aliquid, doloremque aperiam? Perspiciatis exercitationem nam libero minus. Magnam, commodi natus?"

  }];
function Home(){
    const post=postes.map((el)=>{
        return(
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            {/* user data */}
            <div className='userData'>
                <h4 className='userName'>{el.name}</h4>
                <img src={el.srcuser} alt="" />
            </div>
            {/* descreption of post */}
            <div className='descreptionOfPost'>
                <p>{el.caption}</p>
            </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={el.srcpost} className="d-block w-100 imgPost" alt="..."/>
                    </div>
                </div>
                {/* add comment or like */}
                <div className='comment-like'>
                   <span className='AddLike'> Like</span>
                    <span className='AddComeent'>Comment </span>
                </div>
                {/* conferm comment */}
                <div className='comment'>
                    <input type="text" placeholder='Text' className='inputComment' />
                    <button className='btnCommeny'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                          <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471z"/>
                        </svg>
                    </button>
                </div>
            </div>
        )
    })
    return(
        <div className="Home">
            <CreatePost/>
            {post}

        </div>
    )
}
export default Home