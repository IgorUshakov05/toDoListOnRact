import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import InputElem from './components/InputElem';
import InputElemText from './components/InputElemText';
import OlMy from './components/ol';

function App() {
  const [childData, setChildData] = useState('');
  const [childDataText, setChildDataText] = useState('');
  const [state, closeOpen] = useState(false);
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('favorite');
    return storedData ? JSON.parse(storedData) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorite', JSON.stringify(data));
  }, [data]);

  const addData = (title, text) => {
    const newData = { id: data.length + 1, title, Messages: text };
 
    // Update state
    setData((prevData) => [...prevData, newData]);

    // Close the modal
    closeOpen(false);
  };

  const removeData = (id) => {
    const updatedData = data.filter((elem) => elem.id !== id);
    
    // Update state
    setData(updatedData);
  
    // Update localStorage
    localStorage.setItem('favorite', JSON.stringify(updatedData));
  };
  

  const toggleModal = () => {
    closeOpen(!state);
  };
  

  const handleChildData = (dataFromChild) => {
    setChildData(dataFromChild);
  };

  const handleChildDataText = (dataFromChild) => {
    setChildDataText(dataFromChild);
  };

  return (
    <div className="App container w-75 m-auto d-flex flex-column mt-4">
      <h3>Мои заметки</h3>
      <button
        type="button"
        onClick={toggleModal}
        className="btn btn-outline-primary w-25"
      >
        Создать заметку
      </button>
      <div className={`modal ${state ? 'd-block' : ''}`}> <div className="modal-dialog"> <div className="modal-content"> <div className="modal-header"> <h3 className='modale-title'>Создать заметку</h3> </div> <div className="modal-body"> <div className='groupElements w-100 m-auto d-flex flex-column'> <InputElem onDataFromChild={handleChildData}/> <InputElemText onDataFromChildText={handleChildDataText}/> </div> </div> <div className="modal-footer"> <button type="button" onClick={toggleModal} className="btn btn-secondary" data-bs-dismiss="modal">Отмена</button> <button onClick={() => addData(childData, childDataText)} type="button" className="btn btn-primary" disabled={childData.length <= 3 || childDataText.length <= 3} > Сохранить </button> </div> </div> </div> </div>

      {!data.length ? (
        <p className="App-link mt-3">Заметок нет</p>
      ) : (
        <OlMy propsElem={{data}} forParents={removeData}/>
      )}
    </div>
  );
}

export default App;
