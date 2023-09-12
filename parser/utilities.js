
module.exports.stringExtender = function stringExtender(currentString, stringToExtend){
    if(typeof(stringToExtend) !== 'string') throw new Error('expecting only string type')
    if(typeof(currentString) !== 'string') throw new Error('expecting only string type')
    return currentString.concat(stringToExtend)
}
