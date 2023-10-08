import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

function UserInput() {

  const [userInput, setUserInput] = useState('');

  const changeHandler = (e) => {
    setUserInput(e.target.value);
  }

  const fetchData = async () => {
    const response = await fetch(`http://ip-api.com/json/${userInput}`);
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="user-input">
      <input onChange={changeHandler} className="input" type="text" placeholder="Search for any IP address or domain" />
      <MdKeyboardArrowRight onClick={fetchData} className='arrow' />
    </div>
  )
}

export default UserInput;