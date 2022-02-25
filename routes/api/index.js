const express = require("express"),
    router = express.Router();

router.use(
    "/coworkers",
    require("./coworkers")
);

router.use(
    "/coworker",
    require("./coworker")
);

module.exports = router;
