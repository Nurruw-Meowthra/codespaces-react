import './App.css';
import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpenses/NewExpenses'

const App = () => {
  const data = [
    {
      date: new Date(2026, 10, 12),
      title: 'New book',
      price: 30.99
    },
    {
      date: new Date(1282, 6, 6),
      title: 'The Ant-Christ',
      price: 666
    }
  ]
  
  return (
    <div className="App">
      <NewExpense></NewExpense>
      <Expenses data={data}/>
    </div>
  );
}

export default App;
