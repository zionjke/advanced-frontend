import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
    title: 'shared/AppLink',
    component: AppLink,
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        to: './',
        children: 'Text',
        theme: AppLinkTheme.PRIMARY,
        className: '',
    },
};

export const Secondary: Story = {
    args: {
        to: './',
        children: 'Text',
        theme: AppLinkTheme.SECONDARY,
        className: '',
    },
};
