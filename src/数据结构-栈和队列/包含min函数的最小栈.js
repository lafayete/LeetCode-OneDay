
 var MinStack = function() {

    this.stack = [];

    this.minStack = [];
};

MinStack.prototype.push = function(x) {

    this.stack.push(x);

    let len = this.minStack.length;

    if (len === 0 || x <= this.minStack[len - 1]) {
        this.minStack.push(x);
    }


};

MinStack.prototype.pop = function() {

    let result = this.stack.pop();

    if (this.minStack[this.minStack.length - 1] === result) {
        this.minStack.pop();
    }

};

MinStack.prototype.top = function() {

    return this.stack[this.stack.length - 1];

};

MinStack.prototype.min = function() {

    let len = this.minStack.length;

    return this.minStack[len - 1] || null;
};
