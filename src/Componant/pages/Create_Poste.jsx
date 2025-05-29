import '../style/CreatePost.css'

function CreatePost(){
    return(
        <div className='createPost'>
        {/* <h1>CreatePost</h1> */}
        <div className="inputbox">
            <input type="text" className='postText' placeholder='waht is your mind' />
            <img src="https://tse2.mm.bing.net/th?id=OIP.bPHIW2pOvehoq9tC3ysh7wHaE8&pid=Api&P=0&h=220" alt="" />
        </div>
        <hr />
        <div className="postType">
            <div className='postPhoto'>
                <p>Photo</p>
                <span class="material-symbols-outlined">
                    photo_library
                </span>
            </div>
            <div className='PostVideo'>
                <p>Video</p>
                <span class="material-symbols-rounded">
                    videocam
                </span>
            </div>
        </div>
        </div>
    )
}
export default CreatePost