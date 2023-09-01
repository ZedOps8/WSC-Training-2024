const express = require('express');
const app = express();
const productUtils = require('./utils/productutils');
const axios = require('axios');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/products', async (req, res) => {
    try {
        let response  = await productUtils.listProducts();
        res.send(response);
    } catch (error) {
        console.log(`Error: ${error}`);
        // 400 response code
        res.sendStatus(400);
    }
});

app.get('/ec2instance', async (req, res) => {
    try {
      // fetch instance id from http://169.254.169.254/latest/meta-data/instance-id
      let response = await axios.get('http://169.254.169.254/latest/meta-data/instance-id');
      res.send({instanceid: response.data});
    } catch (error) {
      console.log(`Error: ${error}`);
      // 400 response code
      res.sendStatus(400);
    }
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});