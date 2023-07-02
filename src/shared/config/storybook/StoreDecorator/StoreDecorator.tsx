import type { Story } from '@storybook/react';
import type { StateSchema } from 'app/providers/StoreProvider';
import type { DeepPartial } from '@reduxjs/toolkit';
import { StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
);
