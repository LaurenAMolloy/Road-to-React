import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from './Counter';
import { vi } from 'vitest'

//Test for buttons and inputs to be on the page

test('it shows four buttons and one input field', () => {
    //render the component
    render(<Counter />)

    //Manipulate the component
    const buttons = screen.getAllByRole('button');
    const input = screen.getByRole('spinbutton');

    //screen.logTestingPlaygroundURL()

    //Assertion
    expect(buttons).toHaveLength(4);
    expect(input).toBeInTheDocument();
})