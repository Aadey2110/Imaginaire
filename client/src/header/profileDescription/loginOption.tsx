import React from 'react'

import { AppDispatch } from '../../store';
import { useAppDispatch } from '../../hooks/store';
import { login } from '../../store';

import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const LoginOption = () => {
  const dispatch: AppDispatch = useAppDispatch();
  
  const handleLoginButton = () => {
    dispatch(login({isLogin: true, username: "user123", email: "aadeyshah55@gmail.com"}));
  }

  return (
    <div className='text-white'>
      <button onClick={handleLoginButton} className='flex flex-row gap-2.5'>
        <div>
            <FontAwesomeIcon icon={faRightToBracket} />
        </div>
        <div>
          login/signup
        </div>
      </button>
    </div>
  )
}
