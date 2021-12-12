import { useState } from 'react';
import './App.css';
import {SearchContacts,ShowContacts} from './components'


function App() {
  const [data, setData] = useState([
    {id:1, name:'Ana Marić', tel: '+3851234567'},
    {id:2, name:'Ante Lovrić', tel: '+3851234567'},
    {id:3, name:'Anđela Stipić', tel: '+3851234567'},
    {id:4, name:'Antonela', tel: '+3851234567'},
    {id:5, name:'Branimir Marić', tel: '+3851234567'},
    {id:6, name:'Bruna Vidić', tel: '+3851234567'},
    {id:7, name:'Borna Lukić', tel: '+3851234567'},
    {id:8, name:'Boris', tel: '+3851234567'},
    {id:9, name:'Darija Marić', tel: '+3851234567'},
    {id:10, name:'Dean Anić', tel: '+3851234567'},
    {id:11, name:'Dino', tel: '+3851234567'},
    {id:12, name:'Doris', tel: '+3851234567'},
    {id:13, name:'Mario Marić', tel: '+3851234567'},
    {id:14, name:'Maja', tel: '+3851234567'},
    {id:15, name:'Marijan', tel: '+3851234567'},
    {id:16, name:'Marija', tel: '+3851234567'},
    {id:17, name:'Mišo', tel: '+3851234567'},
  ])

  const [searchInput, setSearchInput] = useState('')
  const [contacts, setContacts] = useState(data);

  const handleSearch = (e) =>{
    let newInput = e.target.value;

    console.log(newInput);
    let newContacts = data.filter(contact => contact.name.toLowerCase().includes(newInput) || contact.name.includes(newInput) || contact.name.toUpperCase().includes(newInput));
    setSearchInput(newInput);
    setContacts(newContacts);
    console.log(newContacts)
    console.log(contacts)
  }

  const handleDelete = (id) =>{
    let newData = data.filter(contact => contact.id !== id);
    setData(newData);
    let newContacts = newData.filter(contact => contact.name.toLowerCase().includes(searchInput) || contact.name.includes(searchInput) || contact.name.toUpperCase().includes(searchInput));
    setContacts(newContacts)
    console.log('izbrisano')
  }

  return (
    <div className="App">
      <h1 className='title'>Imenik</h1>
      <SearchContacts searchInput={searchInput} changeSearchInput={handleSearch}/>
      <ShowContacts contacts={contacts} deleteContact={handleDelete}/>
      
    </div>
  );
}

export default App;
