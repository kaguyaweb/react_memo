import { ChangeEvent, useState } from "react"
import Card from "./Card"
import styles from './FormContainer.module.css'

type Props = {
    onSubmit: (data: {name: string, price: number, date: Date}) => void
}

const FormContainer = (props: Props) => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [date, setDate] = useState('')
    const [isValid, setIsValid] = useState(true)

    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value.length > 10) {
            setIsValid(false)
        } else {
            setIsValid(true)
        }
        setName(e.target.value)
    }
    const onChangePrice = (e: ChangeEvent<HTMLInputElement>) => {
        const p = Number(e.target.value)
        setPrice(p)
    }
    const onChangeDate = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value)
    }

    const onClickRegister = () => {
        const data = { name, price, date: new Date(date)}
        props.onSubmit(data)
    }

    return (
        <Card className={styles.container}>
            <div>
                <label>Name: </label><input className={`${!isValid && styles.invalid}`} value={name} onChange={onChangeName}/>
            </div>
            <div>
                <label>Price: </label><input type='number' value={price} onChange={onChangePrice}/>
            </div>
            <div>
                <label>Date: </label><input type='date' value={date} onChange={onChangeDate}/>
            </div>
            <button disabled={!isValid} onClick={onClickRegister}>Register</button>
        </Card>
    )
}

export default FormContainer