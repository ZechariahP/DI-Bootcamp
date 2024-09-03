import { useDispatch } from 'react-redux';
import { remove } from './state/slice';

const TaskRemove = (props) => {
    const dispatch = useDispatch();

    const removeTask = () => {
        dispatch(remove(props.task.id));
    }

    return (
        <button onClick={() => removeTask()}>Remove Task</button>
    );
}

export default TaskRemove;