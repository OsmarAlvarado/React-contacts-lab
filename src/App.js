
import { useState } from 'react';
import contactsData from './contacts.json'
import './App.css';

function App() {

    const [contacts, setContacts] = useState(contactsData.slice(0, 6))

    console.log(contacts);
    console.log(contactsData);

    const randomContact = () => {
        const newContact =
            contactsData[Math.floor(Math.random() * contactsData.length)]

        if (!contacts.includes(newContact)) {
            setContacts([newContact, ...contacts])
        }
    }

    const sortByName = () => {
        contactsData.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            } return 0
        
        })
        
    }

    return (
        <div className="App">

            <button onClick={randomContact}>Add random contact</button>
            <button  >Sort by popularity</button>
            <button onClick={sortByName}>Sort by Name</button>

            <table>
                <tr className='App'>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Won Emmy</th>
                    <th>Won Oscar</th>
                </tr>
                {contacts.map((contact) => {
                    return (

                        <div className='App'>
                            <table>
                                <tr>
                                    <td>
                                        <img className='img' src={contact.pictureUrl} />
                                    </td>
                                    <td>
                                        <h3>{contact.name}</h3>
                                    </td>
                                    <td>
                                        <h3>{contact.popularity}</h3>
                                    </td>
                                    <td>
                                        <h3>{contact.wonEmmy ? <p>Tiene Emmy 🏆</p> : null}</h3>
                                    </td>
                                    <td>
                                        <h3>{contact.wonOscar ? <p>Tiene Oscars! 🏆</p> : null}</h3>
                                    </td>
                                </tr>

                            </table>

                        </div>
                    )
                })}
            </table>

        </div>
    )
}

export default App;