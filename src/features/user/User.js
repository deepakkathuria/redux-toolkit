import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './userSlice';

const User = ({ userId }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.userInfo);
  console.log(user.name,"users")
  const status = useSelector((state) => state.user.status);
  console.log(status,"status")
  const error = useSelector((state) => state.user.error);
  console.log(error,"error")

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser(userId));
    }
  }, [status, dispatch, userId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default User;
