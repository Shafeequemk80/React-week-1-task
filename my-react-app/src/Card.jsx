
import profile_pic from './assets/profile.jpg'

function Card(){

    return(
        <div className="card">
            <img className='card-profile' src={profile_pic} alt="Profile_picture" />
            <h2 className='card-title'>Shafeeque</h2>
            <p className='card-text'>i am a  software developer</p>
        </div>
    )
}

export default Card