import React from 'react';
import Button from './Button';

const ButtonList = () => {
  // const buttonList = ["All", "Gaming", "Movies", "Songs", "Football", "Cricket", "Cooking"];
  return (
    <div className='flex'>
      <Button name="All" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Soccer" />
      <Button name="Cricket" />
      <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Soccer" />
      <Button name="Cricket" />
    </div>
  )
}

export default ButtonList