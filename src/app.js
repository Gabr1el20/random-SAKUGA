const express = require('express')
const { createClient } = require('@supabase/supabase-js')

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ireumvmoybitxftsqlgh.supabase.co/', process.env.SUPABASE_KEY)
const app = express()
app.get('/', async (req, res) => {
  try {
    // Fetch data from Supabase
    const { data, error } = await supabase.from('sakuga').select()

    if (error) {
      console.error(error)
      res.status(500).send('Internal Server Error')
      return
    }

    // Check if there is any data
    if (!data || data.length === 0) {
      res.status(404).send('No data found')
      return
    }

    // Choose a random index
    const randomIndex = Math.floor(Math.random() * data.length)
    console.log('The random KA you got was made by', data[randomIndex].author)
    // Set the Content-Type header to indicate that you are sending an image
    res.setHeader('Content-Type', 'application/json')
    res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate')
    // Send the image file
    res.send(data[randomIndex])
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
