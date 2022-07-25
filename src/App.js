import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

export default function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: '$500.12',
      date: new Date(2022, 6, 19),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2022, 6, 12),
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2022, 6, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450.33,
      date: new Date(2022, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
