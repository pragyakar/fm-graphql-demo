import React from 'react';
import { useForm } from "react-hook-form";
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';

import { getOwnersDropdownQuery } from '../../../queries/owners';  
import { addPetMutation } from '../../../queries/pets';
import addPetSchema from './addPetSchema';

const AddPetForm = (props) => {
  
  const { loading, profiles } = props.getOwners;

  const { register, handleSubmit, errors } = useForm({
    validationSchema: addPetSchema
  });

  const onSubmit = data => {
    props.addPet({
      variables: {
        name: data.name, 
        animal: data.animal,
        breed: data.breed,
        age: data.age,
        imageUrl: data.imageUrl,
        ownerId: data.ownerId
      }
    });
  }

  return (
    <div className="form-container">
      { loading ? 'Loading' :
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field">
            <label>What name does your pet answer to?</label>
            <input 
              type="text" 
              name="name" 
              ref={register}
              placeholder={"Pet Name"}
            />
            {errors.name && <span className="error-msg">{errors.name.message}</span> }
          </div>
          <div className="field">
            <label>What species is your pet?</label>
            <input 
              type="text" 
              name="animal" 
              ref={register}
              placeholder={"Animal Species"}  
            />
            {errors.animal && <span className="error-msg">{errors.animal.message}</span>}
          </div>
          <div className="field">
            <label>What breed is your pet?</label>
            <input 
              type="text" 
              name="breed" 
              ref={register}
              placeholder={"Breed Name"}
            />
            {errors.breed && <span className="error-msg">{errors.breed.message}</span> }
          </div>
          <div className="field">
            <label>How old is your pet?</label>
            <input 
              type="number" 
              name="age" 
              ref={register}
              placeholder={"Age of your pet"}
            />
            {errors.age && <span className="error-msg">{errors.age.message}</span> }
          </div>
          <div className="field">
            <label>Add a picture of your pet</label>
            <input 
              type="text" 
              name="imageUrl" 
              ref={register}
              placeholder={"URL of a picture of your pet"}
            />
            {errors.imageUrl && <span className="error-msg">{errors.imageUrl.message}</span> }
          </div>
          <div className="select-field">
            {/* <label>Owner</label> */}
            <select ref={register} name="ownerId">
              <option value="" className="label">Select owner</option>
              { profiles && profiles.map((owner) =>
                <option value={owner.id} key={owner.id}>
                  {owner.name}
                </option>
              )}
            </select>
            {errors.ownerId && <span className="error-msg">{errors.ownerId.message}</span> }
          </div>
          <button type="submit" className="btn-submit">GO</button>
        </form>
      }
    </div>
  );
}

export default compose(
  graphql(getOwnersDropdownQuery, {name: "getOwners"}),
  graphql(addPetMutation, {name: "addPet"})
)(AddPetForm);