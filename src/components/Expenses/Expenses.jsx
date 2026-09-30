import React, { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
        console.log('Year data in Expenses.js ' + selectedYear)
    }

    return (
        <Card className="expenses">
            <ExpensesFilter onChangeFilter={filterChangeHandler}/>
            {
                props.expenses.map((expense) => {
                    return (
                        <ExpenseItem 
                            key={expense.id}
                            expenseData={expense} 
                        />
                    )
                })
            }
        </Card>
    )
}

export default Expenses