import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

function UserInput({onSearch}) {

  const [userInput, setUserInput] = useState('');

  const changeHandler = (e) => {
    setUserInput(e.target.value);
  }

  const handleClick = () => {
    onSearch(userInput);
    setUserInput('');
  }


  return (
    <div className="user-input">
      <input onChange={changeHandler} className="input" type="text" placeholder="Search for any IP address or domain" />
      <MdKeyboardArrowRight onClick={handleClick} className='arrow' />
    </div>
  )
}

export default UserInput;