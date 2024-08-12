const Hello = (props) => {
    console.log(props);
    const { username, email } = props;
    return (
        <>
            <h1>Hi, {username} {email}</h1>
        </>
    );
};
export default Hello;