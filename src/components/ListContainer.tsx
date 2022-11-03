import Card from "./Card"
import styles from './ListContainer.module.css'

type ListItem = {
    id: string,
    content: { name: string, price: number, date: Date}
}

type Props = {
    listItems: ListItem[],
    onClickDelete: (id: string) => void,
}

const ListContainer = (props: Props) => {
    const { listItems, onClickDelete } = props

    const onClickDeleteButton = (id: string) => {
        onClickDelete(id)
    }

    return (
        <Card className={styles.container}>
            <ul style={{ padding: 0 }}>
                {listItems.map(item => {
                    return (
                        <Card className={styles['list-item']}>
                            <li key={item.id}>{item.content.name} {item.content.price} yen</li>
                            <button onClick={() => onClickDeleteButton(item.id)}>Delete</button>
                        </Card>
                    )
                })}
            </ul>
        </Card>
    )
}

export default ListContainer