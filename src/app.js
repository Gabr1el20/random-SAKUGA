const newData = require('./getDataFromDB')
const express = require('express')
// Create a single supabase client for interacting with your database
const app = express()
app.get('/', async (req, res) => {
  try {
    // Choose a random index
    const randomIndex = Math.floor(Math.random() * newData.length)
    console.log('The random KA you got was made by', newData[randomIndex].author)
    // Set the Content-Type header to indicate that you are sending an image
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    // Send the image file
    res.send(newData[randomIndex])
  } catch (err) {
    console.error('Error:', err.message)
    res.status(500).send('Internal Server Error')
  }
})

const PORT = 1234
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

module.exports = app
