import Input from './Input';

const Action = (props) => {
    return (
        <>
            <h2>This is the text:</h2>
            <Input setText={props.setText} />
        </>
    );
}

export default Action;