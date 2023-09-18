import type { Meta, StoryObj } from '@storybook/react';

import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';
import { NavBar } from './NavBar';

const meta = {
    title: 'widgets/Navbar',
    component: NavBar,
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {

    },
};

export const Dark: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className={`app ${Theme.DARK}`}>
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};
