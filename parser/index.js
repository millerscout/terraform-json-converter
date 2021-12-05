const { stringExtender} = require('./utilities')
const {typeDecider} = require("./types");

function terraformJsonParser(terraformJson) {
    let tfString = ''
    const modules = Object.keys(terraformJson)
    for (const module of modules) {
        tfString = stringExtender(tfString, initialModuleStringConstructor(module))
        const nonModuleText = typeDecider(terraformJson[module])
        tfString = stringExtender(tfString, nonModuleText)
    }
    return tfString
}

function initialModuleStringConstructor(moduleName) {
    return `module "${moduleName}" `
}


module.exports.terraformJsonParser = terraformJsonParser