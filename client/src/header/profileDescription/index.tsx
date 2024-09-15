import { LoginOption } from './loginOption';
import { ProfileBrief } from './profileBrief';

import { useAppSelector } from '../../hooks/store';
import { RootState } from '../../store';

export const ProfileDesc = () => {
  const isLogin: boolean = useAppSelector((state:RootState) => state.user.value.isLogin);
  return (
    <div>
        {isLogin ? <ProfileBrief /> : <LoginOption />}
    </div>
  )
}
