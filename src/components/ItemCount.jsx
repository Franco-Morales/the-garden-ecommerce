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
        <div className='card w-25 m-5'>
            <div className='card-body'>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-dark" onClick={handlerPlus} disabled={stock===0}>+</button>
                    <input type="number" className="form-control" disabled value={count} />
                    <button className="btn btn-outline-dark" onClick={handlerMinus} disabled={stock===0}>-</button>
                </div>
            </div>
            <div className="card-footer d-grid">
                {/* { (stock)? 
                    <button className="btn btn-outline-amazon" onClick={(e) => onAdd(e, count)}>Add to cart</button> :
                    <button className='btn btn-amazon' disabled>Out off stock</button>
                } */}
                <button className="btn btn-outline-amazon" onClick={(e) => onAdd(e, count)} disabled={(stock===0)}>Add to cart</button>
            </div>
        </div>
    )
}

export default ItemCount
