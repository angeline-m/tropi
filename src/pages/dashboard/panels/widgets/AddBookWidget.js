import React, {useState}  from 'react'
import {v4 as uuidv4} from 'uuid'
import firebaseApp from '../../../../firebase/firebaseConfig'
import ViewAllPanel from '../ViewAllPanel'

const AddBookWidget = (props) => {
    const [title, setTitle] = useState('Unnamed Book')
    const [author, setAuthor] = useState('Unnamed Author')
    const [totalPages, setTotalPages] = useState('Unknown')
    const [lastPage, setLastPage] = useState('0')
    const [status, setStatus] = useState('Active')

    function insertBook() {
        const id = uuidv4().substr(0,8)
        if (title !== '' && author !== '') {
            const bookRef = firebaseApp.firestore().collection('1').doc('bookshelf').collection('book').doc(id)
            bookRef.set({
                id,
                title,
                author,
                totalPages,
                lastPage,
                status
            })
        }

    }

    
    return (
        <div>
            <div class="modal-bg">
                <div class="modal">
                    <form>
                        <label for="title" class="required">Book Title:</label>
                        <input type="text" id="title" name="title" maxlength="50" onChange={(e)=>setTitle(e.target.value)}/>
                        <label for="author" class="required">Author(s):</label>
                        <input type="text" id="author" name="author" maxlength="30" onChange={(e)=>setAuthor(e.target.value)}/>
                        <label for="totalPages" class="required">Number of Total Pages:</label>
                        <input type="number" id="totalPages" name="totalPages" onChange={(e)=>setTotalPages(e.target.value)}/>
                        <label for="lastPage">Last Page Read:</label>
                        <input type="number" id="lastPage" name="lastPage" value="0" onChange={(e)=>setLastPage(e.target.value)}/>
                        <label for="status">Reading Status:</label>
                        <select name="status" id="status" onChange={(e)=>setStatus(e.target.value)}>
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        <button onClick={insertBook}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBookWidget