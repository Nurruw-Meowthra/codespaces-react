import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.expenseData.date} />
            <div className='expense-item__description'>
                <h2>{props.expenseData.title}</h2>
                <Card className='expense-item__price'>${props.expenseData.amount}</Card>
            </div>
        </Card>
    )
}

export default ExpenseItem;