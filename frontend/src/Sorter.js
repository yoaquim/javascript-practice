function simpleSort(collection, k) {
    var didSort = false;
    for (var i = 0; i < collection.length - k; i++) {
        if (collection[i] > collection[i+1]){
            didSort = true;
            var temp = collection[i+1];
            collection[i+1] = collection[i];
            collection[i] = temp;
        }
    }

    return didSort;
}

function mergeLists (list1, list2) {

    var newList = [];
    var done = false;

    while (!done) {
        var len1 = list1.length;
        var len2 = list2.length;

        if (len1 && len2) {
            var el1 = list1[0];
            var el2 = list2[0];

            el1 < el2
            && newList.push(list1.shift())
            || newList.push(list2.shift());

        } else if (len1){
            newList = newList.concat(list1);
            done = true;
            break;
        } else if (len2) {
            newList = newList.concat(list2);
            done = true;
            break;
        } else {
            done = true;
            break;
        }
    }

    return newList;
}

function convergeLists (lists) {

    if (lists.length === 1) {
        return lists;
    }

    var merged = [];

    for (var i = 0; i < lists.length-1; i+=2) {
        var list1 = lists[i];
        var list2 = lists[i+1];
        merged.push(mergeLists(list1, list2));
    }

    if (lists.length%2 !== 0) {
        var lastSortedList = merged.pop();
        var lastOriginalList = lists[lists.length-1];

        merged.push(mergeLists(lastOriginalList, lastSortedList));
    }

    return convergeLists(merged);
}

var Sorter = {

    bubble: function (collection, passes) {
        passes = passes || 0;

        if (passes === collection.length - 1) {
            return collection;
        }

        if (simpleSort(collection, passes)) {
            return this.bubble(collection, ++passes);
        } else {
            return collection;
        }
    },

    quick: function (collection) {

        if (collection.length === 1) {
            return collection;
        }

        var wall = 0;
        var pivot = collection[collection.length-1];

        for (var i = 0; i < collection.length-1; i++) {
            var currentElement = collection[i];

            if (currentElement < pivot) {
                var elementToRightOfWall = collection[wall];
                collection[wall] = currentElement;
                collection[i] = elementToRightOfWall;
                wall++;
            }
        }

        var leftSubArray = collection.slice(0, wall);
        var rightSubArray = collection.slice(wall, collection.length - 1);

        var sortedLeft = this.quick(leftSubArray);
        var sortedRight = !!rightSubArray.length && this.quick(rightSubArray);

        collection = sortedRight
                     && [].concat(sortedLeft, pivot, sortedRight)
                     || [].concat(sortedLeft, pivot);

        return collection;
    },

    merge: function (collection) {
        var lists = [];

        for (var i = 0; i < collection.length; i++) {
            var element = collection[i];
            lists.push([element]);
        }

        return convergeLists(lists);
    }

};

module.exports = Sorter;