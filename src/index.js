const  express =  require('express');
const app = express()
const port = 3001
app.get('/', (req, res) => {
 res.send('Hello world')
})
app.listen(port, function () {
 console.log(`App is listening on port ${port} !`)
})