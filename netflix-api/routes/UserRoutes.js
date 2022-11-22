const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
  isLike,
} = require("../controllers/UserController");

const router = require("express").Router();

router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);

module.exports = router;
