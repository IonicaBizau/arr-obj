"use strict";

const findValue = require("find-value");

/**
 * arrObj
 * Convert an array into object by using unique fields.
 *
 * @name arrObj
 * @function
 * @param {Array} arr The input array.
 * @param {String|Function} by The field name to use in the object keys or a
 * function returning this value.
 * @param {Boolean} deep Use this for accessing nested objects in the array elements.
 * @return {Object} The result object.
 */
module.exports = function arrObj (arr, by, deep) {
    let obj = {};
    if (typeof by === "function") {
        for (let i = 0; i < arr.length; ++i) {
            let c = arr[i];
            obj[by(c)] = c;
        }
    } else {
        if (deep) {
            for (let i = 0; i < arr.length; ++i) {
                let c = arr[i];
                obj[findValue(c, by)] = c;
            }
        } else {
            for (let i = 0; i < arr.length; ++i) {
                let c = arr[i];
                obj[c[by]] = c;
            }
        }
    }
    return obj;
};
