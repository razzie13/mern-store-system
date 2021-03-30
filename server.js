const express = require('express');

const mongoose = require("mongoose");
const app = express();

const port = 5000;


const plu_data_schema = require("./connections/schemas/schema-plu-data");
const pluItem = require("./connections/schemas/schema-plu-data");
const customerOrders = require("./connections/schemas/schema-orders");

// --------------------------------------------------------------------------------------------------------------------
// ---------------   MONGODB CONNECTIONS   ----------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

var uri_plu_data = `mongodb+srv://Greg:smart123@cluster0-eyzy7.gcp.mongodb.net/plu_data?retryWrites=true&w=majority`;
const connection_plu_data = mongoose.createConnection(uri_plu_data, { useUnifiedTopology: true, useNewUrlParser: true });
const plu_data = connection_plu_data.model('store_plu_data', require('./connections/schemas/schema-plu-data'), 'store_plu_data');


app.listen(port, () => console.log(`Server started on port ${port}`));

// --------------------------------------------------------------------------------------------------------------------
// ---------------   TEST ROUTE   -------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

app.get('/data/plu-data', (req, res) => {

    var response = {};
    plu_data.find({},function(err,data){
    if(err) {
        response = {"error" : true,"message" : "Error fetching data"};
    } else {
        response = data;
        const dataResponse = data;
        res.json(dataResponse)
        console.log('success: /data/plu-data .get');
    }
});
   
})

// --------------------------------------------------------------------------------------------------------------------
// ---------------   SEARCH BAR QUERIES   -----------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------
// app.get("/data/search-by-item-code", (req, res) => {
//     console.log("Accessed : /data/search-by-item-code .get");
//     //let itemCodeFormField = req.body.itemCode;
//     var response = {};
//     plu_data.find({},
//         function(err,data){
//             if(err) {
//                 response = "Sorry, Nothing Matches your Search."
//             } else {
//                 response = data;
//                 const dataResponse = data;
//                 res.json(dataResponse);
//                 console.log("Success : /data/search-by-item-code .get");
//                 console.log(data)
//             }
            
            
            
//         });
// });


// --------------------------------------------------------------------------------------------------------------------
// ---------------   WEBSTORE   ---------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------------------------------------

app.get('/mern-store-system/', (req, res) => {
    res.render(__dirname + '/index')
})