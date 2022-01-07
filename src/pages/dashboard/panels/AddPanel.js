import React, {useState}  from 'react'
import AddBookWidget from './widgets/AddBookWidget'

const AddPanel = () => {
    const [addModal, setAddModal] = useState(false)

    function toggleAddModal() {
        setAddModal(!addModal)
    }

    return (
        addModal,
        toggleAddModal
    )
}

export default AddPanel