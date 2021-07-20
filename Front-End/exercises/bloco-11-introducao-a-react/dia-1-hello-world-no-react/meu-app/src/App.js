
import './App.css';

const compromises = ['estudar', 'comer', 'passear', 'tomar banho'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    <div>
      <h1>Lista 1</h1>
      <ul>{Task('teste')}</ul>
      <h1>Lista 2</h1>
      <ul>{compromises.map((compromise) => <li> {compromise} </li>)
      }</ul>
    </div>

  );
}

export default App;
