import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './actions';
import AddTodo from './components/addTodo';
import Display from './components/Display';
import store from './store';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  adDTodo: (todo) => dispatch(addTodo(todo)),
  toggleTodo: (id) => dispatch(toggleTodo(id)),
  removeTodo: (id) => dispatch(removeTodo(id)),
});

const ConnectedDisplay = connect(mapStateToProps, mapDispatchToProps)(Display);
const ConnectedAddTodo = connect(null, mapDispatchToProps)(AddTodo);

const TodoList = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <ConnectedAddTodo />
      <ConnectedDisplay />
    </div>
  );
}

export const App = () => {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}

export default App;