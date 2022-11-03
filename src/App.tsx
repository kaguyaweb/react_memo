import { useState } from 'react';
import './App.css';
import FormContainer from './components/FormContainer';
import ListContainer from './components/ListContainer';
import Modal from './components/Modal';

function App() {
  type ListItem = {
    id: string,
    content: {name: string, price: number, date: Date},
  }

  const [listItems, setListItems] = useState<ListItem[]>([])
  const [deletingId, setDeletingId] = useState('')
  const [isShowModal, setIsShowModal] = useState(false)
  const onClick = (data: {name: string, price: number, date: Date}) => {
    const listItem = { id: Math.random().toString(), content: data }
    setListItems(prevListItem => [...prevListItem, listItem])
  }

  const deleteListItem = (id: string) => {
    setDeletingId(id)
    setIsShowModal(true)
  }

  const onClickModalYes = () => {
    setListItems(listItems.filter(item => item.id != deletingId))
    setIsShowModal(false)
  }
  const onClickModalNo = () => {
    setIsShowModal(false)
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Expenses</h1>
      </div>
      <FormContainer onSubmit={onClick}/>
      <ListContainer onClickDelete={deleteListItem} listItems={listItems} />
      {isShowModal && <Modal ok={onClickModalYes} ng={onClickModalNo}/>}
    </div >
  );
}

export default App;
