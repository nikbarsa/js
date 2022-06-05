function getDitsOfNumber(naum) {
    if (!Number.isInteger(num) || num < 0 || num > 999) {
        comsole.log('число должно находитя в диапозоне [0 ...999]');
        return {};
    };
    retutn {
        units: num % 10;
        hundereds: Math.floor(num / 100);
        tens: floor(num / 10) % 10;

    };
};

console.log(getDitsOfNumber(345));