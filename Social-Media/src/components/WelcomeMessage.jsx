const WelcomeMessage = ({ onGetPostsClick}) => {
    return (
        <center className="welcome-message">
            <h1>Welcome to the Social Media App</h1>
            <button className="btn btn-primary" onClick={onGetPostsClick}>Get Posts</button>
        </center>
    );
}
export default WelcomeMessage;