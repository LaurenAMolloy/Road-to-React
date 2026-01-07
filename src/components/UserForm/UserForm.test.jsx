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
    const button = screen.getByRole('button', { name: /add user/i });

    //Simulate clicking the button
    await user.click(button);

    //Assertion to make sure callback is called woth email/name
    // expect(argList).toHaveLength(1);
    // expect(argList[0][0]).toEqual({ name: jane, email: 'jane@jane.com'})
    expect(onUserAdd).toHaveBeenCalledTimes(1)
    expect(onUserAdd).toHaveBeenCalledWith({
        name:'jane', 
        email:'jane@jane.com' 
    })
});