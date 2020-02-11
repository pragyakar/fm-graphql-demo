import React, { Fragment } from 'react';
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
    <Fragment>
    { loading ? 'Loading' :
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
          <label>Pet Name</label>
          <input type="text" name="name" ref={register}/>
          {errors.name && <p>{errors.name.message}</p> }
        </div>
        <div className="field">
          <label>Animal</label>
          <input type="text" name="animal" ref={register}/>
          {errors.animal && <p>{errors.animal.message}</p>}
        </div>
        <div className="field">
          <label>Breed</label>
          <input type="text" name="breed" ref={register}/>
          {errors.breed && <p>{errors.breed.message}</p> }
        </div>
        <div className="field">
          <label>Age</label>
          <input type="number" name="age" ref={register}/>
          {errors.age && <p>{errors.age.message}</p> }
        </div>
        <div className="field">
          <label>Image Url</label>
          <input type="text" name="imageUrl" ref={register}/>
          {errors.imageUrl && <p>{errors.imageUrl.message}</p> }
        </div>
        <div className="field">
          <label>Owner</label>
          <select ref={register} name="ownerId">
            <option value="">Select owner</option>
            { profiles && profiles.map((owner) =>
              <option value={owner.id} key={owner.id}>
                {owner.name}
              </option>
            )}
          </select>
            {errors.ownerId && <p>{errors.ownerId.message}</p> }
        </div>
        <button type="submit">Add</button>
      </form>
    }
    </Fragment>
  );
}

export default compose(
  graphql(getOwnersDropdownQuery, {name: "getOwners"}),
  graphql(addPetMutation, {name: "addPet"})
)(AddPetForm);