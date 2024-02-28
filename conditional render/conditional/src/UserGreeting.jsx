import PropTypes from 'prop-types' ;
function UserGreeting(props){

    const welcomeMsg= <h2 className="welcome-msg"> welcome {props.username}</h2>
    const welcomelog = <h2 className="welcome-log">Please log in to continue</h2>

    return (props.isLoggedIn ? welcomeMsg : welcomelog
    
    )

}
UserGreeting.PropTypes={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps={
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting