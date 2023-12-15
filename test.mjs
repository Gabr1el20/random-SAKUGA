import { createClient } from '@supabase/supabase-js'
import express from 'express'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://ireumvmoybitxftsqlgh.supabase.co/', process.env.SUPABASE_KEY)

let { data: sakuga, error } = await supabase
  .from('sakuga')
  .select('*')
console.log(sakuga)

const app = express()

app.get('/', (req, res) => {
  const randomIndex = Math.floor(Math.random() * sakuga.length)
  res.json(sakuga[randomIndex])
})

app.listen(0, () => {
  console.log('Server is running on port 0')
})
