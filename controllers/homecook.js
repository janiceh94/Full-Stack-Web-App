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

// Create

const createDescription = (req, res) => {
  Homecook.create(req.body, (err, createDescription) => {
      if(err) return res.send(err);
      res.redirect('/homecooks');
  })
}

// Show
const showHomecook = (req, res) => {
  Homecook.findById(req.params.id, (err, foundHomecook) => {
    if(err) return res.send(err);
        const context = {homecooks: foundHomecook,
        user: req.user
      };
        res.render('homecooks/show', context);
  })
} 

// Edit
const editHomecook = (req, res) => {
  Homecook.findById(req.params.id, (err, editDescription) => {
      if (err) res.send(err);
      const context = {homecooks: editDescription};
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
      (err, updatedBiography) => {
          if(err) res.send(err);
          res.redirect(`/homecooks/${updatedBiography._id}`);
      }
  );
};

// Destroy
const destroy = (req, res) => {
  Homecook.findByIdAndDelete(req.params.id, (err, deleteHomecook) => {
      if(err) res.send(err);
      res.redirect('/homecooks');
  });
};

module.exports = {
  index,
  newDescription,
  showHomecook,
  editHomecook,
  updateHomecook,
  createDescription,
  deleteHomecook: destroy,
};