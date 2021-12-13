var canFinish = function(numCourses, prerequisites) {

    let inDegree = new Array(numCourses).fill(0);

    let map = {};

    for(let i=0; i< prerequisites.length; i++) {

        inDegree[prerequisites[i][0]]++;

        if(map[prerequisites[i][1]]) {


            map[prerequisites[i][1]].push(prerequisites[i][0]);

            
        } else {

            map[prerequisites[i][1]] = [prerequisites[i][0]];

        }

    }


    let queue = [];

    for(let i=0; i< inDegree.length; i++) {

        if(inDegree[i] == 0) {

            queue.push(i);

        }

    }


    let count = 0;
;
    while(queue.length) {

        let selected = queue.shift();

        count++;
        let toEqueue = map[selected];

        if(toEqueue && toEqueue.length) {

            for(let i=0; i<toEqueue.length; i++) {

                inDegree[toEqueue[i]]--;

                if(inDegree[toEqueue[i]] === 0) {

                    queue.push(toEqueue[i]);

                }


            }



        }


    }

    return count === numCourses;

};


let result = canFinish(2, [[1,0]]);


console.log(result);