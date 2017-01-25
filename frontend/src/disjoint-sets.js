// Helpers
//-----------

function generateNodes(amount) {
    var nodes = [];

    for (var i=0; i < amount; i++) {
        var node = new Node(i+1);
        nodes.push(node);
    }

    return nodes;
}

function generateSetsCollection(nodes) {
    var sets = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        sets.push(makeSet(node)) ;
    }
    return sets;
}

function printNode(node) {
    var parent = node.parent.data === node.data ? 'this' : node.parent.data;
    console.log('[data: ' + node.data + ' | rank: ' + node.rank + ' | parent: ' + parent + ']');
}

function printSet(set, name) {
    console.log('\n\n');
    console.log(name + ' Set');
    console.log('--------------------------');
    var members = set.members;
    for (var i = 0; i < members.length; i++) {
        var node = members[i];
        printNode(node);
    }
}

// Classes
//-----------

function Node(data, rank, parent) {
    this.data = data;
    this.rank = rank || 0;
    this.parent = parent || this;
}

function Set(root, members) {
    this.root = root;
    this.members = members;
}

// Core functions
//-----------
function makeSet(node) {
    return new Set(node, [node]);
}

function union(firstSet, secondSet) {
    var newRoot;

    if (firstSet.root.rank <= secondSet.root.rank) {
        secondSet.root.rank++;
        firstSet.root.parent = secondSet.root;
        newRoot = secondSet.root;
    } else {
        secondSet.root = firstSet.root;
        secondSet.root.parent = firstSet.root;
        newRoot = firstSet.root;
    }

    var newMembers = firstSet.members.concat(secondSet.members);
    return new Set(newRoot, newMembers);
}

// Main
//-----------

// generate nodes and put them in sets
var nodes = generateNodes(10);
var singleEntrySets = generateSetsCollection(nodes);

// ranked sets
var rankedSet1 = union(singleEntrySets[3], singleEntrySets[4]);
printSet(rankedSet1, 'Ranked 1');

var rankedSet2 = union(singleEntrySets[6], singleEntrySets[5]);
printSet(rankedSet2, 'Ranked 2');

var rankedSet3 = union(singleEntrySets[0], singleEntrySets[7]);
printSet(rankedSet3, 'Ranked 3');

var rankedSet4 = union(singleEntrySets[9], singleEntrySets[2]);
printSet(rankedSet4, 'Ranked 4');

// merged sets
var mergedSet1 = union(rankedSet1, rankedSet2);
printSet(mergedSet1, 'Merged 1');

var mergedSet2 = union(rankedSet3, rankedSet4);
printSet(mergedSet2, 'Merged 2');

var mergedSet3 = union(rankedSet2, rankedSet3);
printSet(mergedSet3, 'Merged 3');

var mergedSet4 = union(rankedSet4, rankedSet1);
printSet(mergedSet4, 'Merged 4');


// super merged sets
var superMergedSet1 = union(mergedSet1, mergedSet2);
printSet(superMergedSet1, 'Super Merged');

var superMergedSet2 = union(mergedSet3, mergedSet4);
printSet(superMergedSet2, 'Super Merged');
