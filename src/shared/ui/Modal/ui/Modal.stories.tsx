import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from 'shared/ui/Modal/ui/Modal';

const meta = {
    title: 'shared/Modal',
    component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        isOpen: true,
        children: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquam aut dolores esse incidunt officiis perferendis repellendus voluptatem? Ab aliquam architecto asperiores, at atque beatae blanditiis deleniti doloribus ducimus eligendi error expedita ipsam laborum minus mollitia nam nesciunt odit perferendis possimus praesentium provident quaerat ratione sint sunt totam vel veritatis voluptatum. A ab adipisci assumenda at consequatur culpa delectus deleniti deserunt doloremque enim exercitationem facilis fuga fugiat, inventore minima molestiae perspiciatis placeat provident quae, quidem quod, reiciendis repudiandae sapiente soluta tenetur velit vitae voluptates. Aliquid at blanditiis labore libero magni nostrum obcaecati perspiciatis quas repellendus ut veniam, veritatis voluptas voluptates.',
    },
};
