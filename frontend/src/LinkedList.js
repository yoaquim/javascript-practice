var LinkedList = function (firstNode) {
    this.head = firstNode;
    this.tail = firstNode;
};

LinkedList.prototype.add = function (node) {
    this.tail.next = node;
    this.tail = node;
};

LinkedList.prototype.iterate = function (callback, currentNode, previousNode) {
    currentNode = currentNode || this.head;

    if (!currentNode) {
       return;
    }

    var result = callback(currentNode, previousNode);

    if (result) {
        return result;
    } else {
        return currentNode.next && this.iterate(callback, currentNode.next, currentNode);
    }
};

LinkedList.prototype.find = function (key) {
   return this.iterate(function (currentNode) {
     if (currentNode.key === key) {
         return currentNode;
     }
   });
};

LinkedList.prototype.remove = function (key) {
    var _this = this;
    this.iterate(function (currentNode, previousNode) {
        if (currentNode.key === key) {

            if (previousNode) {

                if (currentNode.next) {
                    previousNode.next = currentNode.next;
                } else {
                    _this.tail = previousNode;
                    previousNode.next = void(0);
                }

            } else if (currentNode.next) {
                _this.head = currentNode.next;
            } else {
                _this.head = void(0);
                _this.tail = _this.head;
            }

            delete(currentNode);
        }
    });
};

module.exports = LinkedList;
