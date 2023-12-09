import type { DeepPartial } from '@reduxjs/toolkit';
import type { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
  test('should return login form', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'UserName',
        password: 'qwerty',
        isLoading: false,
      },
    };
    expect(getLoginState(state as StateSchema)).toEqual({
      username: 'UserName',
      password: 'qwerty',
      isLoading: false,
    });
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginState(state as StateSchema)).toEqual(undefined);
  });
});
