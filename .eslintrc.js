module.exports = {
    "extends": "google",
    "env": {
        "browser": true,
    },
"require-jsdoc": ["error", {
    "require": {
        "FunctionDeclaration": false,
        "MethodDefinition": false,
        "ClassDeclaration": false
    }}],
"valid-jsdoc": ["error", { 
      "requireReturn": false 
}],
};
