const Test = (props) => {
    return (
        <div style={{border: "1px solid #000"}}>
            <h2>Function Component</h2>
            <h3>{props.text}</h3>
        </div>
    );
};

export default Test;