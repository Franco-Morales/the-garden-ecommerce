import React from 'react'


const Loading = ({ isFullPage }) => {
    let pageFormat = isFullPage? "pageFormat" : "itemFormat";
    
    return (
        <div id={ pageFormat }>
            <div className="spinner-border text-leaf" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}


export default Loading;