import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from 'shared/ui';

describe('Button', () => {
  test('only class', () => {
    render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
    screen.debug();
  });
});
