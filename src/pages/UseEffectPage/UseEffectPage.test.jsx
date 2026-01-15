import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import UseEffectPage from './index';

//set up a fake request
//Test and intercept the routes
const handlers = [
    rest.get('/api/beers', (req, res, ctx) => {
        
    })
]