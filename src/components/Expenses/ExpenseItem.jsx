import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'

const ExpenseItem = (props) => {

    const clickHandler = () => {
        console.log('Clicked!')
    }

    return (
            <Card className='expense-item'>
                <Card className='expense-date'>
                    <div className='expense-date__month'>{month}</div>
                    <div className='expense-date__day'>{day}</div>
                    <div className='expense-date__year'>{year}</div>
                </Card>
                <div className='expense-item__description'>
                    <h2>{props.data.title}</h2>
                    <Card className='expense-item__price'>{props.data.price}</Card>
                </div>
                <button onClick={clickHandler}>Click Me</button>
            </Card>
    )
}

export default ExpenseItem;
