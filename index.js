const express = require('express')
const path = require('path')
const fs = require('fs')

const KAs = [
  {
    name: '/random-API/assets/daniel-kim-jjk:5.gif',
    author: 'Daniel Kim',
    series: 'Jujutsu Kaisen'
  },
  {
    name: '/random-API/assets/lupin-the-third.gif',
    author: 'Takeshi Koike',
    series: 'Lupin III'
  },
  {
    name: '/random-API/assets/one-piece-law.gif',
    author: 'Masami Mori',
    series: 'One Piece'
  },
  {
    name: '/random-API/assets/shinya_ohira.gif',
    author: 'Shinya Ohira',
    series: 'One piece'
  }
]

const app = express()

app.use(express.static(path.join(__dirname, 'assets')))

app.get('/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * KAs.length)
  res.send(KAs[randomIndex].name)
})

app.listen(0, () => {
  console.log('Server is running on port 0')
})
