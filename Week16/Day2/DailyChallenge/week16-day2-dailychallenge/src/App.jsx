import { Provider, connect } from 'react-redux';
import { DatePicker } from './components/DatePicker';
import { TaskDisplay } from './components/TaskDisplay';
import { addTask, editTask, deleteTask } from './actions';
import { store } from './store';

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks[state.tasks.selectedDay] || [],
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTask: (day, task) => dispatch(addTask({ day, task })),
        editTask: (day, index, task) => dispatch(editTask({ day, index, task })),
        deleteTask: (day, index) => dispatch(deleteTask({ day, index })),
    };
}

const ConnectedDatePicker = connect(mapStateToProps, mapDispatchToProps)(DatePicker);

const ConnectedTaskDisplay = connect(mapStateToProps, mapDispatchToProps)(TaskDisplay);

export default function Store() {
    return (
        <Provider store={store} >
        <ConnectedDatePicker />
        <ConnectedTaskDisplay />
        </Provider>
    );
}
