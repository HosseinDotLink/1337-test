const en = require('../helper/language/en.json'),
    sendResponse = require('../utils/sendResponse'),
    coworkersService = require('../services/coworkers');

exports.list = async (req, res) => {
    try {
        const data = await coworkersService.list(req.query);
        sendResponse(res, 200, data);
    } catch (error) {
        return sendResponse(res, 400, {
            error: {
                message: error.message || en.enterDataCorrectly
            }
        });
    }
}


exports.findById = async (req, res) => {
    try {
        const data = await coworkersService.findById(Number(req.params.id));
        sendResponse(res, 200, data);
    } catch (error) {
        return sendResponse(res, 400, {
            error: {
                message: error.message || en.enterDataCorrectly
            }
        });
    }
}

exports.editById = async (req, res) => {
    try {
        const data = await coworkersService.editById(Number(req.body.id), req.body);
        sendResponse(res, 200, data);
    } catch (error) {
        return sendResponse(res, 400, {
            error: {
                message: error.message || en.enterDataCorrectly
            }
        });
    }
}