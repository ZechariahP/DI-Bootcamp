import '../users.json';

const User = (props) => {
    console.log(props);
    const {id, name, username, email} = props.info;

    const style = {
        border: '1px solid black',
        padding: '10px',
        margin: '10px',
        borderRadius: '10px',
        addEventListener: 'pointer',
    }

    return (
        <>
        <div style={style}>
            <h1> {name} {email} {username} </h1>
            <img src={`http://robohash.org/${id}?size=150x150`}/>
        </div>
        </>
    );
};
export default User;