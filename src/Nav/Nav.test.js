import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <Nav />
<<<<<<< HEAD
    </BrowserRouter>,
    div
  );
=======
    </BrowserRouter>, div);
>>>>>>> master
  ReactDOM.unmountComponentAtNode(div);
});
