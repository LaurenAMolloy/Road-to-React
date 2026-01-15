import { screen, render, getAllByRole } from '@testing-library/react';
import BeerCard  from './BeerCard'
import { expect } from 'vitest';

test('renders a grid of beers', () => {
    //fake list of beers 
    const beerList = [
        { 
            id: 1,
            name: "Punk IPA",
            image: 'punk.png',
            tagline: 'Post modern Classic IPA'
        },
        { 
            id: 2,
            name: "Elvis Juice",
            image: 'elvis.png',
            tagline: 'Grapefruit IPA',
        }
    ]
    //Render the component
    render( <BeerCard beerList={beerList} />);
    
   
    //Get the elements
    const cards = screen.getAllByRole('article');
    
    
    //Make the assertions 
    expect(cards).toHaveLength(2);
    
    //get the image
    //role = "img"
    //WHAT is it?
    //WHAT would a screen reader call it?
    const img = screen.getByRole('img', { name: "Punk IPA" } )
    //check the attributes on the image
    expect(img).toHaveAttribute(
        'src',
        'https://punkapi-alxiw.amvera.io/v3/images/punk.png'
    )
});
