const express = require('express');
require('./services/passport')
const authRoutes = require('./routes/authRoutes')
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({ welcome: 'Home' })
})

//protected routes
app.use(authRoutes)

app.listen(5000, () => {
    console.log(`sever islistening`);
});