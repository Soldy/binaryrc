const brc = new (require('./index.js')).base();
const nanoTest   = new (require("nanoTest")).test({
    'progress_bar':false,
    'debug_print':'short'
});

nanoTest.add(
    'integer array to binary string',
    {
        "function":brc.aTs,
        "options":[
            [ 108, 111, 114, 101, 109, 32, 105, 112, 115, 117, 109 ]
        ]
    },
    "===",
    "lorem ipsum"
);

nanoTest.add(
    'binary string to integer array',
    {
        "function":brc.sTa,
        "options":[
            "lorem ipsum"
        ]
    },
    "j==",
    [ 108, 111, 114, 101, 109, 32, 105, 112, 115, 117, 109 ]
);


nanoTest.run();





