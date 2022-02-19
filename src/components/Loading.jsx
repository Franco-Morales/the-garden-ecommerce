import React from 'react';


const Loading = ({ isFullPage }) => {
    return (
        <div id={ isFullPage? "pageFormat" : "itemFormat" }>
            <div className="spinner-border text-leaf" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}


export default Loading;