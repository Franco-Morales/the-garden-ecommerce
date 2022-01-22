import React from 'react'

const Loading = () => {
    return (
        <div className="d-flex justify-content-center" style={{ marginTop: 100, marginBottom: 100}}>
            <div className="spinner-border text-leaf" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loading;
