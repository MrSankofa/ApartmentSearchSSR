import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './client/App.jsx';
import Html from './client/Html';
const Models = require('../model/models.js');

const port = 4000;
const server = express();

server.get('/', (req, res) => { 

  Models.psqlRetrieveAll((data) => {
    console.log('data: ', data);
  
    if ( Array.isArray(data) === false ) {
        data = [];
    }
    const body = renderToString(<App coordinates={data}/>);
    console.log('body: ', body);
    
    const title = 'Server side Rendering with Google Maps';
    
    res.send(
      Html({
        body,
        title,
      })
    );
  });
  

});

server.listen(port);
console.log(`Serving at http://localhost:${port}`);