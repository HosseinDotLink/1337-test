const { get } = require("lodash");

const express = require("express"),
    router = express.Router(),
    {
        findById,
        editById
    } = require("../../controllers/coworkers"),
    validator = require("../../validators");

router.get(
    "/:id",
    findById
);

router.post(
    "/",
    validator("update"),
    editById
)

module.exports = router;