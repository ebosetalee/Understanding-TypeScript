# UNDERSTANDING TYPESCRIPT
JavaScript uses __dynamic types__(resolved at runtime) while TypeScript uses __static types__ (set during development).

### CORE TYPES
Typrscript allows creation of typs but these are the major types:
1. NUMBER: There isnt float or int, just number. All numbers are floats by default. i.e 5.0
2. String: "age"
3. boolean: true || false
4. Objects: {age: 30} - ts requires the type and properties should be defined.
5. Array: ["1", 2, "yes"]
6. tuple: special array [1, 2], Fixed-length array except when .push() is used.
7. Enum: Only exist in ts enum{ NEW, OLD }, authomatically gives an enumerated list
8. Any: * - means any kind of value
9. Union: (number | string)
10. Literal type: alias - type combine = number | string
11. return type: void(doesn't return anything i.e no return statement), undefined, number, string
12. function type 
13. unknown type: `let userInput: unknown;` it is better than any as it restricts the entry
14. Never return type: throwing error returns a never type.

using "!" is telling typescript that a value must be passed to the variable.

### COMPILER:
1. tsc
2. tsc --init : compile all files that end with tsc and create a tsconfig.json file 
3. in tsconfig.json can add `"exclude": ["node_modules"]`
4. in tsconfig.json can add `"include": ["app.ts"]`

### DIRECTORY:
1. outDir: in tsconfig.json "./dist" - input files
2. rootDir: in tsconfig.json "./src" - output files
3. noEmitOnError: Don't compile a file if it has an error

https://www.youtube.com/watch?v=BwuLxPH8IDs
