var express = require('express');
var router = express.Router();
var file_controller = require('../controllers/fileController');

/* GET users listing. */
router.get('/files-list', file_controller.fileList);


router.get('/tables', file_controller.tablesList);

module.exports = router;
