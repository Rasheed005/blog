const express = require('express'); 
const app = express();

const PORT = 3000;



app.get('/', (req, res) => {
    res.send('WELCOME TO BACKEND DEVELPOMENT CLASS, BE CAREFUL WITH YOUR CODE'); 
    });


app.listen(PORT, () => {
    console.log(`server and is running on port http://localhost:${PORT}/`); 
});
