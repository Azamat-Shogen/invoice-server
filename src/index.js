const express = require('express');

const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
    const a = 4;
    const b = 9;
    console.log(a + b);

    res.send('Hello world');
});

app.get('/home', ()=> {

});
app.listen(PORT, () => {
    
    console.log(`Server is running on port: ${PORT}`);
});