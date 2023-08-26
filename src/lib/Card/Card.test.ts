import { render, screen } from '@testing-library/svelte';
import { describe, it, expect } from 'vitest';
import Card from './Card.svelte';

const mockTitleProp = 'This is the mock title!!';

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
});
