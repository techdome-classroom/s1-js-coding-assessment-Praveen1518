const decodeTheRing = function(s, p) {
    p = p.split('?').join('.');
    p = p.split('*').join('.*');
    const regex = new RegExp(`^${p}$`);
    return regex.test(s);
};

module.exports = decodeTheRing;