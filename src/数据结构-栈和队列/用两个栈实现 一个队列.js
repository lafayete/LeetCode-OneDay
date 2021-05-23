
function CQueue() {
    
   this.stack1 = [];

    this.stack2 = [];

}


CQueue.prototype.appendTail = function(value) {


    this.stack1.push(value);

};


CQueue.prototype.deleteHead = function() {

    if(this.stack2.length) {
        return this.stack2.pop()
        
    } else {



        while(this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }
    
    
    
        if(!this.stackB.length){
            return -1;
        }else{
            return this.stackB.pop();
        }
    }

        

};