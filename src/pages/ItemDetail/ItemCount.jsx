import React,{ useState } from 'react'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const handlerPlus = (e) => {
        e.preventDefault();
        setCount((count < stock)? count+1 : stock);
    }

    const handlerMinus = (e) => {
        e.preventDefault();
        setCount((count > initial)? count-1 : initial);
    }


    return (
        <div className='card my-5'>
            <div className='card-body'>
                <div className="input-group">
                    <button className="btn btn-outline-artichoke" onClick={handlerPlus} disabled={stock===0}>+</button>
                    <input type="number" className="form-control text-center" disabled value={count} />
                    <button className="btn btn-outline-artichoke" onClick={handlerMinus} disabled={stock===0}>-</button>
                </div>
            </div>
            <div className="card-footer d-grid">
                <button className="btn btn-outline-amazon" onClick={(e) => onAdd(e, count)} disabled={(stock===0)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount;
