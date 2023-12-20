const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div className='row'>
              <div className='col-sm-6'>
            <h1>{data.place.name}
              </h1>
            <div>
                <img src={data.place.pic} />
              </div>
                <p>{data.place.city} {data.place.state}</p>
            </div>


            <div className='col-sm-6'>
                <h2>Rating</h2>
                <p>rating stars</p>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>{data.place.cuisines}</h4>
                  
            

          
              <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                Edit
                </a>
              
              <form method="POST" action = {`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                    Delete
                </button>
              </form>
            </div> 
        </div>
        <div>
          <h2>Comments</h2>
          <div>comments box!</div>
        </div>
          </main>
        </Def>
    )
}

module.exports = show
