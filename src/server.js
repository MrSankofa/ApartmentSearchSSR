import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App.jsx';
import Html from './client/Html';
const morgan = require('morgan');
const path = require('path');
const Models = require('../model/models.js');

const port = 4000;
const server = express();

server.use(morgan('dev'));
server.use(express.static(path.join(__dirname, '../public')));

// const serverBundle = require('../public/app-server.js').default;

// const React = require('react');
// const ReactDom = require('react-dom/server');
// const Layout = require('./client/html.js');

// const renderComponent = (props = {}) => {
//   let component = React.createElement(serverBundle, props);
//   return ReactDom.renderToString(component);
// };

// server.get('/', (req, res) => { 

//   Models.psqlRetrieveAll((data) => {
//     let component = renderComponent({'data': data});
//     res.end(Layout(
//       'Server side Rendering with Google Maps',
//       component
//     ));

//     if ( Array.isArray(data) === false ) {
//         data = [];
//     }

//     const body = renderToString(<App coordinates={data}/>);
//     const title = 'Server side Rendering with Google Maps';
    
//     res.send(
//       Html({
//         body,
//         title,
//       })
//     );
//   });
  

// });

server.listen(port);
console.log(`Serving at http://localhost:${port}`);