import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui';

describe('Button', () => {
  test('only class', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
    screen.debug();
  });
});
