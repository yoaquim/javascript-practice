module.exports = (function () {

    var Sorter = require('../Sorter');

    var unsorted = [2,9,21,6,3,8,12,5,1];

    console.log('Unsorted array: ' + unsorted);

    var sorted = Sorter.bubble(unsorted);

    console.log('Sorted array: ' + sorted);

});