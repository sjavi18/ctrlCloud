import React from 'react'

const Cards = ({ info }) => {
    return (

        <div className="col-sm-4">
            <div className="card" style={{ width: 18 + 'rem' }}>
                <img src={info.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{info.title}</h5>
                    <p className="card-text">{info.description}</p>
                    <a href="#" className="btn btn-primary">{info.autor}</a>
                </div>
            </div>
        </div>


    )
}

export default Cards