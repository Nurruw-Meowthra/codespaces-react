import './App.css';
import ExpenseItem from './components/ExpenseItem'

const App = () => {

  const date = new Date(2026, 10, 12)
  const title = 'New book'
  const price = 30.99
  
  return (
    <div className="App">
      <ExpenseItem 
      date={date}
      title={title}
      price={price}/>
    </div>
  );
}

export default App;
