import { render, screen, within } from '@testing-library/react'
import UserList from './UserList'

//Helper function
function renderComponent() {
    //render component
    //Fake list of users
    const users = [
        {name: 'jane', email: 'jane@jane.com'},
        {name: 'sam', email: 'sam@sam.com'}
    ];
    
    render(<UserList users={users} />);
    
    return {
        users,
    };
}

test('render one row per user', ()=> {
    renderComponent();

    //find rows
    //How do we know which elements we have
    //How do we query them?
    //screen.logTestingPlaygroundURL();
    const rows = within(screen.getByTestId('users')).getAllByRole('row')
    // const rows = container.querySelectorAll('tbody tr')
    //console.log(table);

    //Look for correct number of rows
    expect(rows).toHaveLength(2)

});

test('render the email and name of each user', ()=> {
    //render array of fake users
    //render the component
    const { users } = renderComponent();
    
    //Grab the elements
    //Decide which queries we should use
    //screen.logTestingPlaygroundURL();
    //iterate over and check for name and email
    for(let user of users) {
        const name = screen.getByRole('cell', { name: user.name })
        const email = screen.getByRole('cell', { name: user.email })
        
        //Make the assertions
        expect(name).toBeInTheDocument();
        expect(email).toBeInTheDocument();
    }

});