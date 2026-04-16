// To create tsconfig.json -> npx tsc --init

// !Type Inferencing
let drink = "chai" //type inferencing means it automatically gets what type of datatype u are assigning them
let cups = Math.random() > 0.5 ? 10 : "05" //cups variable infered the type that cups can be String or Number

//  drink = 42 -> can't assign 42 as it is Number

// !Annotatation -> providing dataType in small letters before assigning value
let company : string = "Google" //Anotation means telling datatype before assigning value
// Compamy can only be String
company = "Microsoft"
let ordered: true; //annotation

