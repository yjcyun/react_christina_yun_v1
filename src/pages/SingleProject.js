import React from 'react';
import { useParams } from 'react-router-dom';

const SingleProject = () => {
  const {id} = useParams();
  return (
    <div>
      <h1>page id is {id}</h1>
    </div>
  )
}

export default SingleProject
