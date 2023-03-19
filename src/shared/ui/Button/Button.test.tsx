import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui';

describe('Button', () => {
  test('only class', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
    screen.debug();
  });
});
