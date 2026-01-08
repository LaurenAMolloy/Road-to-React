//What are the most important parts to test?
//Shows two inputs and one button
//If we click submit we should call the onUserAdd callback

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import UserForm from './UserForm';
import { vi } from 'vitest'

//Built into the global environment
//Provided by jest
test('it shows two inputs and a button', () => {
    
    //render component
    render(<UserForm />)

    //manipulate the component
    const inputs = screen.getAllByRole('textbox');
    const button = screen.getByRole('button');

    //Assertion - make sure the component is doing what we want!
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
});

test('it calls onUserAdd when the form is submitted', async () => {
    const user = userEvent.setup();
    
    //mock function
    const onUserAdd = vi.fn();
    //Render
    render(<UserForm onUserAdd={onUserAdd} />)

    //find inputs
    const [nameInput, emailInput] = screen.getAllByRole('textbox')

    //Simulate typing a name
    await user.type(nameInput, 'jane');

    //Simulate typing a email
    await user.type(emailInput,'jane@jane.com');

    //Find button
    //i means do not worry about upper or lower case!
    const button = screen.getByRole('button', { name: /add user/i });

    //Simulate clicking the button
    await user.click(button);

    
    expect(onUserAdd).toHaveBeenCalledTimes(1)
    expect(onUserAdd).toHaveBeenCalledWith({
        name:'jane', 
        email:'jane@jane.com' 
    })
});

test('empties the two inputs when a form is submitted', async () => {
    const user = userEvent.setup();
    //Render
    //Empty arrow function
    //We don't care about the results from the function
    render(<UserForm onUserAdd={() => {}} />)
    
    //Grab the inputs
    const nameInput = screen.getByRole('textbox', { name: /name/i});
    const emailInput = screen.getByRole('textbox', { name: /email/i});
    const button = screen.getByRole('button');

    await user.click(nameInput);
    await user.keyboard('jane');

    await user.click(emailInput);
    await user.keyboard('jane@jane.com');

    await user.click(button);

    //Make assertions
    expect(nameInput).toHaveValue('')
    expect(emailInput).toHaveValue('')
});