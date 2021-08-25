import React from 'react';

const Event = ({event}) => {
    const deleteEvent = id => {
        console.log('clicked delete' , id)
            fetch(`http://localhost:5000/deleteEvent/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if(result){
               console.log('delete_success');
            }
        })
    }
    return (
        <div className="col-md-3 my-3 ">
            <div className="single-card">
            <img style={{height: '300px'}} src={event.imageURL} alt=""/>
      <div style={{backgroundColor: 'orange'}} className='p-1 h-120'>
      <h5 className="text-white" >{event.name}</h5> 
      <button className="btn btn-danger"onClick={() => deleteEvent(event._id)}>Delete</button>
            </div>
      </div>
      
        </div>
    );
};

export default Event;