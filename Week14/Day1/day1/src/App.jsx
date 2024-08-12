import User from './components/User'
import users from './users.json';
console.log(users);


function App() {
  return (
    <>
      <div>
        {
        users.map((item) => {
          return <User key={item.id} info={item}/>
        })}
        </div>
    </>
  );
}

export default App;