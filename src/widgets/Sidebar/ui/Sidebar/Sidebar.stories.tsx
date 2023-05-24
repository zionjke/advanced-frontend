import type { Meta, StoryObj } from '@storybook/react';

import { ThemeProvider } from 'app/providers/ThemeProvider';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'widgets/Sidebar',
    component: Sidebar,
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className="app">
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};

export const Dark: Story = {
    args: {

    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <div className="app dark">
                    <Story />
                </div>
            </ThemeProvider>
        ),
    ],
};
