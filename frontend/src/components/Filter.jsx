import React from 'react'
import { useState } from 'react'

const categories = [
    {
        "_id": 1,
        "name": "Apartment"
    },
    {
        "_id": 2,
        "name": "House"
    },
    {
        "_id": 3,
        "name": "Condo"
    },
    {
        "_id": 4,
        "name": "Townhouse"
    },
]

const Filter = () => {


    return (
        <div className=''>
            {categories.map((value, index) => (
                <React.Fragment key={index}>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="checkbox" id="category" />
                            <label className="form-check-label" htmlFor="category">{value.name}</label>
                    </div>
                </React.Fragment>
            ))}
        </div>

    )
}

export default Filter