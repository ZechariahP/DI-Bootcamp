import './App.css';
import TaskList from './features/tasks/TaskList';
import CategorySelector from './features/categories/CategorySelector';

function App() {
    return (
        <div className="App">
        <h1>Task Manager</h1>
        <CategorySelector categoryId={1} onSelect={() => console.log('Category selected')} />
        <TaskList />
        </div>
    );
}

export default App;