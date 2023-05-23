import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button component', () => {
    test('Button with text', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });
    test('Button with theme clear', () => {
        render(<Button theme={ThemeButton.CLEAR}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
        screen.debug();
    });
});
