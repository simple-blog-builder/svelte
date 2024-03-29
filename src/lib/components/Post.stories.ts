import type { Meta, StoryObj } from '@storybook/svelte';
import Post from './Post.svelte';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
	title: 'simple-blog-builder/Post',
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	component: Post,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' },
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large']
		}
	}
} satisfies Meta<Post>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Main: Story = {
	args: {
		// blog: true,
	}
};
