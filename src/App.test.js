import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom'
=======
import { BrowserRouter } from 'react-router-dom';
>>>>>>> master
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <App />
<<<<<<< HEAD
    </BrowserRouter>,
    div
  );
=======
    </BrowserRouter>, div);
>>>>>>> master
  ReactDOM.unmountComponentAtNode(div);
});
