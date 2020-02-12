import React from 'react';
import { useForm } from "react-hook-form";
import { graphql } from 'react-apollo';

import addOwnerSchema from './addOwnerSchema';
import { addOwnerMutation } from '../../../queries/owners';  

const AddOwnerForm = (props) => {

  const { register, handleSubmit, errors } = useForm({
    validationSchema: addOwnerSchema
  });

  const onSubmit = data => {
    props.addOwner({
      variables: {
        name: data.name, 
        imageUrl: data.imageUrl,
        bio: data.bio,
        email: data.email
      }
    });
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Enter Full Name</label>
          <input 
            type="text" 
            name="name" 
            ref={register}
            placeholder={"Jonathan Dho"}
          />
          {errors.name && <span className="error-msg">{errors.name.message}</span> }
        </div>
        <div className="field">
          <label>Enter Email Address</label>
          <input 
            type="text" 
            name="email" 
            ref={register}
            placeholder={"jonathan@fusemachines.com"}  
          />
          {errors.email && <span className="error-msg">{errors.email.message}</span>}
        </div>
        <div className="field">
          <label>Add a Profile Picture</label>
          <input 
            type="text" 
            name="imageUrl" 
            ref={register}
            placeholder={"URL of a profile picture"}
          />
          {errors.imageUrl && <span className="error-msg">{errors.imageUrl.message}</span> }
        </div>
        <div className="field">
          <label>Describe yourself in some words</label>
          <input 
            type="text" 
            name="bio" 
            ref={register}
            placeholder={"Resham Firiri"}
          />
          {errors.bio && <span className="error-msg">{errors.bio.message}</span> }
        </div>
        <button type="submit" className="btn-submit">GO</button>
      </form>
    </div>
  );
}

export default graphql(
  addOwnerMutation, { name: "addOwner"}
)(AddOwnerForm);