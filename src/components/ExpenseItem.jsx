import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'
import Card from './Card'

const ExpenseItem = (props) => {

    const day =props.data.date.toLocaleString('en-US', {day: '2-digit'})
    const month =props.data.date.toLocaleString('en-US', {month: 'long'})
    const year =props.data.date.getFullYear()
    
        

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
            </Card>
    )
}

export default ExpenseItem
