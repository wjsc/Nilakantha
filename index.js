const { setImmediate } = require("timers");

const π = (sum, sign, top, b1, b2, b3) => () => {
    return setImmediate(π(sum +sign*top/(b1*b2*b3), sign * -1, top, b3, b3+1, b3+2));
};

π(3, 1, 4, 2, 3, 4)();
