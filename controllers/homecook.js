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

//Edit
// const editDescription = (req, res) => {
//   db.Homecook.findbyId(req.params.id, (err, editDescription) => {
//       if (err) res.send(err);
//       const context = {recipes: editDescription};
//       res.render("homecook/edit", context)
//   });
// };

// Update
// const updateDescription = (req, res) => {
//   db.Homecook.findbyIdAndUpdate(
//       req.params.id,
//       {
//           $set: {
//               ...req.body,
//           },
//       },
//       {new: true},
//       (err, updatedDescription) => {
//           if(err) res.send(err);
//           res.redirect(`/recipes/${updatedRecipe._id}`);
//       }
//   );
// };

module.exports = {
  index
};