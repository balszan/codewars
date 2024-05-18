var greet = function(name) {
    let CapitalisedName = name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()
    return "Hello " + CapitalisedName + "!"
}