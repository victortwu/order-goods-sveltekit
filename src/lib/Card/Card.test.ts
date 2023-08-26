import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Card from './Card.svelte';

const mockTitleProp = 'This is the mock title!!';
const mockDescriptionProp = 'This is the mock description!!';

describe('Card', () => {
	it('should render with title prop passed in', () => {
		const { container } = render(Card, {
			title: mockTitleProp
		});
		// select the title
		const title = screen.getByText(mockTitleProp);
		expect(title).toBeTruthy();
		expect(container).toBeTruthy();
	});

	it('should render with description prop passed in', () => {
		const { container } = render(Card, {
			description: mockDescriptionProp
		});
		// select the description
		const description = screen.getByText(mockDescriptionProp);
		expect(description).toBeTruthy();
		expect(container).toBeTruthy();
	});

	it('should render edit button when isAdd is false', () => {
		const { container } = render(Card, {
			isAdd: false
		});
		// select the edit button
		const editButton = screen.getByText('Edit');
		expect(editButton).toBeTruthy();
		expect(container).toBeTruthy();
	});
});
