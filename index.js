const express = require('express')
const app = express()
const hostname = '127.0.0.1';
const port = 5000;
const constants = require('./contants')
const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('<h1>Feddup</h1>')
})

app.post('/validateId', (req, res) => {
    if (req.body.id == constants.userId)
        res.status(200).send({ success: true, msg: 'You authenticated', service: 'paid' })
    else
        res.status(400).send({ success: false, msg: 'Invalid User' })
})
app.post('/user/login', (req, res) => {
    if (req.body.email && req.body.password)
        if (req.body.email == "john@email.com" && req.body.password == 'password')
            return res.status(200).send({ success: true, user: constants.user, limit: { rating: { limit: [true, false, true, false, true].sort(() => Math.random() - 0.5)[0], message: 'you have already reviewed the product for this version' }, suggestion: { limit: [true, false, true, false, true].sort(() => Math.random() - 0.5)[0], message: 'take a break! You can post your next suggestion after 48 hours' }, feedback: { limit: [true, false, true, false, true].sort(() => Math.random() - 0.5)[0], message: 'take a break! You can post your next feedback after 48 hours' } } });
        else {
            res.status(400).send({ success: false, msg: 'Invalid User' })
        }
    else
        res.status(400).send({ success: false, msg: 'Invalid User' })
})
app.get('/user', (req, res) => {
    res.status(200).send(constants.user)
})
app.post('/user', (req, res) => {
    try {
        console.log(req.body, req.query)
        if (req.body.ipAddress) {
            return res.status(200).send({ success: true, user: null, limit: { rating: { limit: [true, false, true, false, true].sort(() => Math.random() - 0.5)[0], message: 'you have already reviewed the product for this version.' }, suggestion: { limit: [true, false, true, false, true].sort(() => Math.random() - 0.5)[0], message: 'You have reached the limit for next 72 hours, sign up for free to keep the dialogue going.' }, feedback: { limit: [true, false, true, false, true].sort(() => Math.random() - 0.5)[0], message: 'You have reached the limit for next 72 hours, sign up for free to keep the dialogue going.' } } })
        }
        else if (req.body.userId == constants.user.id)
            return res.status(200).send({ success: true, user: constants.user, limit: { rating: { limit: [true, false, true, false, true].sort(() => Math.random() - 0.5)[0], message: 'you have already reviewed the product for this version' }, suggestion: { limit: [true, false, true, false, true].sort(() => Math.random() - 0.5)[0], message: 'take a break! You can post your next suggestion after 48 hours' }, feedback: { limit: [true, false, true, false, true].sort(() => Math.random() - 0.5)[0], message: 'take a break! You can post your next feedback after 48 hours' } } });
        else throw Error("Invalid User")
    } catch (error) {
        console.log(error.message);
        res.status(400).send(error)
    }
})

app.get('/authenticatedButtons', (req, res) => {
    res.status(200).send(constants.authenticatedButtons)
})
app.get('/unAuthenticatedButtons', (req, res) => {
    res.status(200).send(constants.unAuthenticatedButtons)
})
app.get('/feedback', (req, res) => {
    res.status(200).send(constants.feedbackQuestions.sort(() => Math.random() - 0.5))
})
app.get('/rating', (req, res) => {
    res.status(200).send(constants.feedbackQuestions.sort(() => Math.random() - 0.5))
})
app.post('/suggestion', (req, res) => {
    console.log(req.body)
    res.status(200).send(req.body);
})
app.post('/upload', (req, res) => {
    console.log(req.body);
    console.log(req)
    res.status(200).send(req.body);
})


app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});