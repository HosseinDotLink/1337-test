const express = require("express"),
    router = express.Router(),
    {
        list,
    } = require("../../controllers/coworkers"),
    validator = require("../../validators");

router.get(
    "/",
    validator('list'),
    list
);

module.exports = router;