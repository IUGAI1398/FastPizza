import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux'
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return
    dispatch(updateName(username));
    navigate('/menu')
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className='mb-4 text-sm text-stone-600'>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='w-72 input mb-8'
      />

      {username !== '' && (
        <div>
          <Button type="small">Create order</Button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
