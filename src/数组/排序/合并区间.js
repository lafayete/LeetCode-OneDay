var merge = function(intervals) {


    intervals.sort((a, b) => {

        return a[0] -b[0]
    })


    let result = [intervals[0]];

    for(let i=1; i< intervals.length; i++) {

        let cur = intervals[i];

        let prev = result[result.length - 1];

        if(cur[0] > prev[1]) {

            result.push(intervals[i]);

        } else {

            prev[1] = Math.max(prev[1], cur[1]);

            result.pop();

            result.push(prev);

        }

    }

    return result;

};

merge([[1,3],[2,6],[8,10],[15,18]]);