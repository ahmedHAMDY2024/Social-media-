import '../style/Profile.css'
const user = {
    username: "Aboutrika",
    name: "Mohamed Aboutrika",
    bio: "football player",
    followers: '120M' ,
    following: '0K'
  };
    function Profile() {
        return (
          <div className="profile-container">
            <img className='profileImg' src='https://tse2.mm.bing.net/th?id=OIP.bPHIW2pOvehoq9tC3ysh7wHaE8&pid=Api&P=0&h=220'/>
            <h1>My Profile</h1>
            <p><strong>Username:</strong> {user.username}</p>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Bio:</strong> {user.bio}</p>
            <p><strong>Followers:</strong> {user.followers}</p>
            <p><strong>Following:</strong> {user.following}</p>
          </div>
        );
      }
      
  
export default Profile