const express = require('express');
const router = express.Router();
var bodyParser = require('body-parser');
var db = require('../../db');

router.use( bodyParser.json() );       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

router.get('/', function (req, res) {
  console.log("Reached customerfb in server");
   db.query('SELECT a.name as name, a.email as email, b.feedback as feedback, b.feedback_ts as feedback_ts from willodb.user a inner join willodb.user_feedback b on a.user_id =b.user_id order by feedback_ts', 
                        function (error, results, fields) 
  {
    if (error) throw error;
    console.log(JSON.stringify(results));
    res.send(JSON.stringify(results));
  });
});

module.exports = router;