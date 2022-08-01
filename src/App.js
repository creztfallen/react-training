import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import { useState } from 'react';

const STATIC_EXPENSES = [
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
    date: new Date(2021, 6, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450.33,
    date: new Date(2020, 5, 12),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(STATIC_EXPENSES);



  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}
