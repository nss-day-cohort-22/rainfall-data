// Copy this entire code example into a Quokka project
const RainfallDatabase = {
    "1948" : [3.4, 3.8, 4.0, 3.9, 3.5, 3.6, 3.6],
    "1949" : [4.3, 4.7, 5.0, 5.3, 6.1, 6.2, 6.7],
    "1950" : [6.5, 6.4, 6.3, 5.8, 5.5, 5.4, 5.0],
    "1951" : [3.7, 3.4, 3.4, 3.1, 3.0, 3.2, 3.1],
    "1952" : [5.8, 6.4, 6.7, 7.4, 7.4, 7.3, 7.5]
  }

// What is total rainfall per year
const totalPerYear = []
for (let key in RainfallDatabase) {
    let currentYear = RainfallDatabase[key]
    let sumRainfall = 0

    for (let month = 0; month < currentYear.length; month++) {
        sumRainfall = sumRainfall + currentYear[month]
    }
    totalPerYear.push({
        "year": key,
        "rainfall": sumRainfall
    })
}




totalPerYear.find(function (yearObject) {
    if (yearObject.year === "1950") {
        console.log(yearObject.rainfall)
    }
})




// How many times did it rain more than 6.0 inches in a month
let numberOfTimes = 0

for (var year = 0; year < RainfallDatabase.length; year++) {
    var currentYear = RainfallDatabase[year];

    for (var month = 0; month < currentYear.length; month++) {
        var currentMonth = currentYear[month];

        if (currentMonth > 6.0) {
            numberOfTimes++
        }
    }
}

numberOfTimes






// Find out how much total rain has fallen over last 10 years
const allRainfall = RainfallDatabase.reduce(
  function(currentSet, nextSet) {
    return currentSet.concat(nextSet)
  }
).reduce(
  function(total, monthlyRainfall) {
    return total + monthlyRainfall
  }
)

console.log(allRainfall)