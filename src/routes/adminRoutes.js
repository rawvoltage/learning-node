var express = require('express');
var mongodb = require('mongodb').MongoClient;

var adminRouter = express.Router();

var books = [
    {
        title: 'War',
        bookId: 656,
        author: 'Lev'
    }, {
        title: 'Les Mis',
        bookId: 24280,
        author: 'Bol'
    }, {
        title: 'Braun',
        author: 'Brick'
    }, {
        title: 'Braun 2',
        author: 'Kro'
    }
];

var router = function (nav) {
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });
            //        res.send('inserting books...');
        });

    return adminRouter;
};

module.exports = router;