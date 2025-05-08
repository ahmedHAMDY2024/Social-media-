import '../style/Home.css'

function Home(){
    return(
        <div className="Home">
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            {/* user data */}
            <div className='userData'>
                <h4 className='userName'>ahmed hamdy</h4>
                <img src="https://scontent.fruh6-1.fna.fbcdn.net/v/t39.30808-6/494643498_537270576117187_7501532892422331333_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SWumsd5iDEUQ7kNvwFK1PLu&_nc_oc=AdkK13Z_vw9UJnAB_S7awqdu7N7VBSHYHP3Fz43hNAfq2VKsPa80REu1Td3_6m0VtiE&_nc_zt=23&_nc_ht=scontent.fruh6-1.fna&_nc_gid=TDz_I7aWHQbAbBwC4E0VAg&oh=00_AfEH76T28wpLt1DGlM3ONtPz69D33OYyWL6NH3qdEWSaHw&oe=68192629" alt="" className='userImg'/>
            </div>
            {/* descreption of post */}
            <div className='descreptionOfPost'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt accusamus illum sit suscipit a rem illo eius consequatur aliquid, doloremque aperiam? Perspiciatis exercitationem nam libero minus. Magnam, commodi natus?</p>
            </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="../src/Componant/IMG_7915.JPG" className="d-block w-100 imgPost" alt="..."/>
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
            <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false">
            {/* user data */}
            <div className='userData'>
                <h4 className='userName'>ahmed hamdy</h4>
                <img src="https://scontent.fruh6-1.fna.fbcdn.net/v/t39.30808-6/494643498_537270576117187_7501532892422331333_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=SWumsd5iDEUQ7kNvwFK1PLu&_nc_oc=AdkK13Z_vw9UJnAB_S7awqdu7N7VBSHYHP3Fz43hNAfq2VKsPa80REu1Td3_6m0VtiE&_nc_zt=23&_nc_ht=scontent.fruh6-1.fna&_nc_gid=TDz_I7aWHQbAbBwC4E0VAg&oh=00_AfEH76T28wpLt1DGlM3ONtPz69D33OYyWL6NH3qdEWSaHw&oe=68192629" alt="" className='userImg'/>
            </div>
            {/* descreption of post */}
            <div className='descreptionOfPost'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sunt accusamus illum sit suscipit a rem illo eius consequatur aliquid, doloremque aperiam? Perspiciatis exercitationem nam libero minus. Magnam, commodi natus?</p>
            </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="../src/Componant/IMG_7915.JPG" className="d-block w-100 imgPost" alt="..."/>
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
        </div>
    )
}
export default Home