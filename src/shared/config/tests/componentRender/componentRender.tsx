import type { ReactNode } from 'react';
import { render } from '@testing-library/react';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { I18nextProvider } from 'react-i18next';
import { MemoryRouter } from 'react-router-dom';
import type { StateSchema } from 'app/providers/StoreProvider';
import { StoreProvider } from 'app/providers/StoreProvider';
import type { DeepPartial } from '@reduxjs/toolkit';

export interface RenderWithRouterOptions {
  route?: string;
  initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: RenderWithRouterOptions = {}) {
  const { route = '/', initialState } = options;

  return render(
    <StoreProvider initialState={initialState}>
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>
          {component}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>,
  );
}
