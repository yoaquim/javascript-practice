module.exports = (function () {

    var Sorter = require('../Sorter');

    var unsorted = [2,9,17,6,3,8];

    console.log('Unsorted array: ' + unsorted);

    var sorted = Sorter.quick(unsorted);

    console.log('Sorted array: ' + sorted);

});