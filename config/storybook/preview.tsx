import type { Preview } from '@storybook/react';
import '../../src/app/styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Theme, ThemeProvider } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
    decorators: [
        (Story) => (
            <BrowserRouter>
                <Story />
            </BrowserRouter>
        ),
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.LIGHT}`}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};

export default preview;
