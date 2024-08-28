import React from 'react'
import { useAppSelector, useAppDispatch } from '../../hooks/store'
import { RootState, AppDispatch, logout } from '../../store'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

export const ProfileBrief = () => {
  const username: string = useAppSelector((state: RootState) => state.user.value.username);
  const dispatch: AppDispatch = useAppDispatch();
  const handleLogoutButton: () => void = () => {
    dispatch(logout({}));
  }
  return (
    <div>
      <button onClick={handleLogoutButton} className='flex gap-2.5'>
        <div>
          <FontAwesomeIcon icon={faUser} />
        </div>
        <div>{username}</div>
      </button>
    </div>
  )
}
