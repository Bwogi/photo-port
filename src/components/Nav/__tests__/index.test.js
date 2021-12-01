import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

afterEach(cleanup);

describe('Nav component', () => {
	// first test
	it('renders', () => {
		render(<Nav />);
	});

	// second test
	it('matches snapshot DOM node structure', () => {
		const { asFragment } = render(<Nav />);
		expect(asFragment()).toMatchSnapshot();
	});
});
