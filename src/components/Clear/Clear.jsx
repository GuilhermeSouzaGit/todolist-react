import React from 'react'
import "./Clear.css"

const Clear = () => {

    const clearTasks = () => {
        localStorage.clear("taskList")
        window.location.reload()
    }

    return (
        <div className="clear-container">
            <button onClick={clearTasks}>Limpar</button>
        </div>
    )
}

export default Clear