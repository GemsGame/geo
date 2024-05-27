import {
  Middleware,
  isRejectedWithValue,
} from '@reduxjs/toolkit';
import {RootState} from '../store';

const errorAlert: Middleware<{}, RootState> = () => next => action => {
  if (isRejectedWithValue(action)) {}

  return next(action);
};

export default errorAlert;
