import axios from 'axios';
import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, watch, errors } = useForm();
  const [imageURL, setIMageURL] = useState(null);


  const onSubmit = data => {
    const eventData = {
      name: data.name,
      imageURL: imageURL
    };
    const url = `http://localhost:5000/addEvent`;
    
    fetch(url, {
      method: 'POST', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(eventData)
    })
    .then(res => console.log('server side response', res))
  };

    const handleImgUpload = event => {
        const imgData = new FormData()
        imgData.set('key', '879a758c310c8e7c6b03f634e3cafb92')
        imgData.append('image', event.target.files[0] )
        axios.post('https://api.imgbb.com/1/upload', imgData)
          .then(function (response) {
            setIMageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
        
    }
    return (
        <div>
            <Container>
                <Row>
                    <h1>Add Your Awesome Events</h1>
                 <form onSubmit={handleSubmit(onSubmit)}>
      <input name='name' placeholder="new event name" {...register("name", { required: true })} />
      <br />
      <br />
      <input type="file"  onChange={handleImgUpload} />
      <br />
      <br />
      <input type="submit" />
    </form>
    </Row>
    </Container>
        </div>
    );
};

export default AddEvent;