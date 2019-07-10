// import express from 'express';
const express = require('express')
const morgan = require('morgan');
const path = require('path');
const Models = require('../model/models.js');
const port = 4000;
const server = express();
const Html = require('./client/html');

server.use(morgan('dev'));

server.use(express.static(path.join(__dirname, '../public')));

const serverBundle = require('../public/app-server.js').default;


const React = require('react') ;
const ReactDom = require('react-dom/server');
const Layout = require('./client/html.js');

const renderComponent = (props = {}) => {
  let component = React.createElement(serverBundle, props);
  return ReactDom.renderToString(component);
};


server.get('/items', (req, res) => { 

  Models.psqlRetrieveAll(req, res).then((data) => {
    let component = renderComponent({'data': data});
    res.end(Layout(
      'Server side Rendering with Google Maps',
      component
    ));

    if ( Array.isArray(data) === false ) {
        data = [];
    }

    // const body = ReactDom.renderToString(component);
    // const title = 'Server side Rendering with Google Maps';
    
    // res.send(
    //   Html({
    //     body,
    //     title,
    //   })
    // );
  }).catch( err => console.error(err));
});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);

