import { render, screen } from '@testing-library/react'
import TestingPage from './index'
import { userEvent } from '@testing-library/user-event'

test('can receive a new user and show it in a list', async () => {
    const user = userEvent.setup();
    //render component
    render(<TestingPage />)

    //find elements
    //Query
    const nameInput = screen.getByRole('textbox', { name: /name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const button = screen.getByRole('button')

    //Simulate click and type
    await user.click(nameInput);
    await user.keyboard('jane');

    await user.click(emailInput);
    await user.keyboard('jane@jane.com');

    await user.click(button);

    //Check Cells
    const name = screen.getByRole('cell', { name: 'jane'});
    const email = screen.getByRole('cell', { name: 'jane@jane.com'});
    //screen.debug();

    //Make assertions
    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
});