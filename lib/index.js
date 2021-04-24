const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;

    const i = Math.floor(Math.log2(bytes) / 10);

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function convert(bytes, originalUnit, targetUnit) {
    if (_isEmpty(originalUnit) || _isEmpty(targetUnit)) {
        throw new Error('Unit must be set.');
    }
    const o = sizes.indexOf(originalUnit) * 10;
    const t = sizes.indexOf(targetUnit) * 10;
    const power = o - t;
    const result = bytes * Math.pow(2, power);
    return result;
}

function _isEmpty(s) {
    if (!sizes.includes(s)) {
        return true;
    }
    return false;
}

module.exports = {
    format: formatBytes,
    convert: convert
}