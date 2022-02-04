const Homecook = require("../models/Homecook")

// Google oath
function index(req, res, next) {
    Homecook.find({}, function(err, homecooks) {
     res.render('homecooks/index', {
      homecooks,
      user: req.user
      });
    });
} 

// New
const newDescription = (req, res) => {
  Homecook.find({}, (err, newDescription) => {
      if (err) res.send (err);
      const context = {homecooks: newDescription};
      res.render("homecooks/new", context)
  });
};

// Show
const showHomecook = (req, res) => {
  Homecook.findById(req.params.id, (err, foundHomecook) => {
    if(err) return res.send(err);
        const context = {homecook: foundHomecook};
        res.render('homecooks/show', context);
  })
} 

// Edit
const editHomecook = (req, res) => {
  Homecook.findById(req.params.id, (err, editDescription) => {
      if (err) res.send(err);
      const context = {recipes: editDescription};
      res.render("homecooks/edit", context)
  });
};

// Update
const updateHomecook = (req, res) => {
  Homecook.findByIdAndUpdate(
      req.params.id,
      {
          $set: {
              ...req.body,
          },
      },
      {new: true},
      (err, updatedDescription) => {
          if(err) res.send(err);
          res.redirect(`/homecooks/${updatedDescription._id}`);
      }
  );
};

// View
const viewHomecook = (req, res) => {
  const context = db.Homecook.getOne(req.params.id)
  res.render("homecooks/show", context)
};

module.exports = {
  index,
  newDescription,
  showHomecook,
  editHomecook,
  updateHomecook,
  viewHomecook,
};