// Create a variable that can contain either a string or a number (union type)? Also, declare a variable that can contain only one of two possible string values: 'enable' or 'disable' (literal type).

let union: string | number;

type Literal = "enable" | "disable";
let literal: Literal;
export {};
