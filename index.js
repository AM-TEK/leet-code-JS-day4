let createCounter = function(init) {
    let count = init;
    function increment() {
        return ++count
    }
    function reset() {
        return (count = init)
    }
    function decrement() {
        return --count
    }

    return {increment, reset, decrement}

    // return {
    //     increment: () => ++count,
    //     reset: () => count = init,
    //     decrement: () => --count
    // }
};

const counter = createCounter(5)
counter.increment()
counter.decrement()
counter.reset()
// console.log(counter);