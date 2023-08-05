import type { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import type { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import type { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject>;
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    asyncReducers,
  } = props;

  const store = createReduxStore(initialState as StateSchema, asyncReducers as ReducersMapObject);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
