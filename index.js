function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
console.log(saturdayFun())

function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
console.log(mondayWork())

function wrapAdjective(flair = "*") {
    return function(adj = "special") {
        return `You are ${flair}${adj}${flair}!`
    }
}
console.log(wrapAdjective()("a hard worker"))
