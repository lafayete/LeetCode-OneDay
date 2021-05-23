
function CStack() {
    
    this.queue1 = [];
 
     this.queue2 = [];
 
 }
 
 
 CStack.prototype.push = function(value) {
 
    if (this.queue1.length === 0) {

        this.queue1.push(val);

    } else if(this.queue2.length === 0) {

        this.queue2.push(val);

    }
 
 };
 
 
 CStack.prototype.pop = function() {
 

    if (this.queue1.length === 0 ) {

        while(this.queue2.length) {

            let temp = this.queue2.poll();
            if (this.queue2.length) {

                this.queue1.push(temp)

            } else {

                return temp
            }

        }
    } else {

        while(this.queue1.length) {

            let temp = this.queue1.poll();

            if (this.queue1.length) {

                this.queue2.push(temp)

            } else {

                return temp
            }



        }


    }


 };