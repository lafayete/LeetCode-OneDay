// 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和

var addStrings = function(num1, num2) {

    let res = [];

    let add = 0;

    let i = num1.length - 1;

    let j = num2.length - 1;

    while(i >=0 || j >=0 || add !=0) {

        let x =  i >=0 ? num1.charAt(i) - '0' : 0;

        let y =  j >=0 ? num2.charAt(j) - '0' : 0;

        let result = x + y + add;

        res.push(result % 10);

        add = Math.floor( result / 10 );

        i--;

        j--;

    }


    return res.reverse().join('');

};
