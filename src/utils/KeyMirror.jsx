const keyMirror = function keymirror(keys) {
    keys = Array.isArray(keys) ? keys : Object.keys(keys);
    return keys.reduce((res, v) => {
        res[v] = v;
        return res;
    }, {})
}

export default keyMirror;

// // example - how it works
// const COLOURS = keyMirror({ blue: null, red: null, green: 0, purple: 'help' });

// console.log(JSON.stringify(COLOURS, null, 4))

// // {
// //     "blue": "blue",
// //     "red": "red",
// //     "green": "green",
// //     "purple": "purple"
// // }

// const COLOURS_FROM_ARRAY = keyMirror(['green', 'purple', 'orange']);
// console.log(JSON.stringify(COLOURS_FROM_ARRAY, null, 4));

// // {
// //     "green": "green",
// //     "purple": "purple",
// //     "orange": "orange"
// // }

// * source -> https://gist.github.com/PulsarBlow/fd279f0f5e6085a59c602feb18c5c76b
