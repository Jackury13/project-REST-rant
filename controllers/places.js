const router = require('express').Router()
const place = require('../models/places.js')

//index
router.get('/', (req,res) => {
      res.render('places/index', { place })
})

//create
router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  place.push(req.body)
  res.redirect('/places')
})

//new
router.get('/new', (req, res) => {
  res.render('places/new')
})

//show
router.get('/:id', (req, res) => {
  
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!place[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', {place: place[id], id})
  }
})
//put 
router.put('/:id', (req, res) => {

  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!place[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }
      // Save the new data into place[id]
      place[id] = req.body
      res.redirect(`/places/${id}`)
  }
})


//delete
router.delete('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!place[id]) {
    res.render('error404')
  }
  else {
    place.splice(id, 1)
    res.redirect('/places')
  }
})


//edit
router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!place[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: place[id] })
  }
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router


