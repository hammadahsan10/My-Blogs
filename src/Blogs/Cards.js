import React from 'react'
import './Blogs.css';

const Cards = (props) => {

  console.log('data', props)

  return (

    <div className="container">
      <div className='card-div'>
        <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-md-2 row-cols-sm-1 g-2">
          {props?.data?.map((item) => (
            <div key={item?.id} className="card-style px-2 pt-2 pb-2 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-2">
              <div className='d-flex card-style2 flex-column'>
                <h5>{item?.title}</h5>
                <p>{item?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}

export default Cards
