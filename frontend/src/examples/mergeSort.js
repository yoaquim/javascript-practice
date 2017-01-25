module.exports = (function () {

    var Sorter = require('../Sorter');

    var unsorted = [74,4,7,21,34,11,23];

    console.log('Unsorted array: ' + unsorted);

    var sorted = Sorter.merge(unsorted);

    console.log('Sorted array: ' + sorted);

});