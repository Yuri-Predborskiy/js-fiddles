/*
    Problem definition:
    https://www.youtube.com/watch?v=kHWy5nEfRIQ
 */

/**
 * @param {number[]} towers
 * @return {boolean}
 */
function isHoppable(towers) {
    function findBestNextPos() {
        let max = { dist: 0, index: -1 };
        for (let i = pos; i <= pos + towers[pos]; i++) {
            if (i >= towers.length) return i; // goal reached, exit
            let dist = towers[i] + i;
            if (dist >= max.dist) {
                max.dist = dist;
                max.index = i;
            }
        }
        return max.index;
    }

    let pos = 0, next = 0;
    while (pos < towers.length && pos >= 0) {
        next = findBestNextPos();
        if (next === pos) return false;
        pos = next;
    }
    return true;
}

let tests = [
    { towers: [4,2,0,0,2,0], ans: true },
    { towers: [1,3,5,3,1,0], ans: true },
    { towers: [0], ans: false },
    { towers: [1,0,5,3,1,0], ans: false },
    { towers: [1,0], ans: false },
];

tests.forEach(test => {
    let res = isHoppable(test.towers);
    let correct = res === test.ans;
    console.log('expected:', test.ans, '| calculated:', res, '| result is', correct ? 'CORRECT' : 'WRONG!');
});
