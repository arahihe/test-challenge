function isValidDNA(dna) {
    if (typeof dna !== 'string' || dna.length === 0) {
        return false;
    }

    const regex = /^[CTAG]+$/;
    if(!regex.test(dna)) {
        return false;
    }
    return true;
}

module.exports = isValidDNA;