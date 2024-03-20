// Code your solution here
function findMatching(drivers, name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.toLowerCase().indexOf(name.toLowerCase()) === 0)
}

function matchName(drivers, name){
    return drivers.filter(driver => driver.name === name)
}