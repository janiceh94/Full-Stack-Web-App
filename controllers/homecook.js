const Homecook = require("../models/Homecook")

// Google oath
function index(req, res, next) {
    Homecook.find({}, function(err, homecook) {
     res.render('homecooks/index', {
      homecook,
      user: req.user
      });
    });
}

// Show
const showHomecook = (req, res) => {
    Homecook.findbyId(req.params.id)
        .populate("homecooks")
        .exec((err, foundRecipe) => {
            if (err) res.send(err);
            const context = {homecooks: foundHomecook};
            res.render("homecooks/show", context)
        })
}

// Edit
const editHomecook = (req, res) => {
  Homecook.findbyId(req.params.id, (err, editDescription) => {
      if (err) res.send(err);
      const context = {recipes: editDescription};
      res.render("homecooks/edit", context)
  });
};

// Update
const updateHomecook = (req, res) => {
  Homecook.findbyIdAndUpdate(
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
  showHomecook,
  editHomecook,
  updateHomecook,
  viewHomecook,
};