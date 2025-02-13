/* eslint-disable react/prop-types */
function Profile(props){
    return(
        <>
            <img src={props.image} alt="Profile" width="200" height="100" />
            <h2>{props.name}</h2>
            <p>{props.bio}</p>
        </>
    )
}
export default Profile