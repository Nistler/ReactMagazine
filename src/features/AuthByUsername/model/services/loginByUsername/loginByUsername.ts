import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { User } from 'entities/User';
import { userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

enum LoginErrors {
  INCORRECT_DATA = 'incorrect',
  SERVER_ERROR = 'serverError',
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
  'login/loginByUsername',
  async (authData: LoginByUsernameProps, thunkAPI) => {
    try {
      const response = await axios.post('http://localhost:8000/login', authData);

      if (!response.data) {
        throw new Error();
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return thunkAPI.rejectWithValue('error');
    }
  },
);
