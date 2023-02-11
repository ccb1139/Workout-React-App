import React from 'react'

function TableHead() {
  return (
    <div className='container  fw-bold '>
      <div className={"row m-1 border border-dark  "}>
        <p className="fridge_input col-3 ">FoodName</p>
        <p className="fridge_exp_date col-3 ">Exp Date</p>
        <div className="col-1"></div>
        <p className={"col-4" }>Days till expired</p>
        {/* <input type="text" defaultValue={expirationDate} className="fridge_input col"></input> */}

      </div>
    </div>
    
  )
}

export default TableHead