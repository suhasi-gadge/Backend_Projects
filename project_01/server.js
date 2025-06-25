// The address of this server connected to the network is: 
// URL -> http://localhost:8383
// IP -> 127.0.0.1:8383
const express = require('express')
const app = express()
const PORT = 8383


//ENDPOINT: HTTP VERBS(method) && Route (or paths)
// The method informs the nature of request and the route is a further subdirectory (basically we direct the request to the body of code 
// to respond appropriately, and these locations or routes are called endpoints)

let data = ['james']


//Middleware
app.use(express.json())


//TYPE 01: Website endpoints (these endpoints are for sending back html and they typically come when a user enters a URL un a browser)
app.get('/', (req, res) => {
    console.log('User requested the home page website')
    res.send(`
        <body 
        style = "background:purple; 
        color: white;">
        <h1>DATA:</h1>
            <p>${JSON.stringify
            (data)}
            </p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('This is my Script')</script>
        `)

})

app.get('/dashboard', (req, res) => {
    res.send(`
        <body 
        style = "background:purple; 
        color: white;">
        <h1>dashboard</h1>
        <a href="/">home</a>
        </body>
        `)

})

//TYPE 02: API endpoints (non-visual)

//CRUD(method) - create(post method) read(get method) update(put method) and delete(delete method)

app.get('/api/data', (req, res) => {
    console.log('This one was for data')
    res.status(599).send(data)
})


//ADD data ENDPOINT
app.post('/api/data', (req, res) => {
    // someone wants to create a user (for example when they click the sign up button)
    //the user clicks the sign up button after entering their credentials, and their browser is wired up to send out a 
    //network request to the server to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req, res) => {
    data.pop()
    console.log('We deleted the element off the end of the array')
    res.sendStatus(203)
})

app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))
