const { stringExtender } = require('./utilities')

function typeDecider(data, option, isInsideArray) {
    if (Array.isArray(data)) return processArray(data, option)
    if (typeof (data) === 'object') {
        if (option) return processObjectNested(data, option)
        else return processObject(data)
    }
    if (typeof (data) === 'string') return processString(data, option, isInsideArray)
    if (typeof (data) === 'number') return processNumber(data, option)
    if (typeof (data) === 'boolean') return processBoolean(data, option)
}

function processArray(data, option) {
    let localString = `${option}\t = \t[\n`
    for (const [index, arrayItem] of data.entries()) {
        localString = stringExtender(localString, typeDecider(arrayItem, null, true))
        if (data.length !== (index + 1)) localString = stringExtender(localString, ',')
    }
    return `${localString}\n\t]\n`
}

function processObject(data) {
    let localString = `{\n `
    const innerKeys = Object.keys(data)
    for (const property of innerKeys) {
        localString = stringExtender(localString, typeDecider(data[property], property))
    }
    return `${localString} }`
}

function processObjectNested(data, option) {
    let localObject = `\t${option} \t = \t {\n`
    const keys = Object.keys(data)
    for (const property of keys) {
        localObject = stringExtender(localObject, `\t\t${typeDecider(data[property], property)}`)
    }
    return `${localObject} \t}\n`
}

function processString(data, option, isInsideArray) {
    if(isInsideArray)return `\t "${data}" \n`
    return `\t${option}\t = \t "${data}" \n`
}

function processNumber(data, option) {
    return `\t${option}\t = \t ${data} \n`
}

function processBoolean(data, option) {
    return `\t${option}\t = \t ${data} \n`
}

module.exports.processBoolean = processBoolean
module.exports.processNumber = processNumber
module.exports.processString = processString
module.exports.processObjectNested = processObjectNested
module.exports.processObject = processObject
module.exports.processArray = processArray
module.exports.typeDecider = typeDecider