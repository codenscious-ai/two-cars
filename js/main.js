laneItemcolorCode = ["blue", "blue", "red", "red"]
blueCar = document.getElementById('blue-car')
redCar = document.getElementById('red-car')

blueCarCurrentLane = 1
redCarCurrentLane = 3

time = 500
score = 0

item = ["obstacle", "point"]



document.addEventListener('DOMContentLoaded', function () {

    document.addEventListener('keydown', function(e) {
        

        if (e.key == 'a') {
            moveCar('blue')
        }
        else if (e.key == 'd') {
            moveCar('red')
        }
    })

})


function moveCar(code) {

    if (code == 'blue'){
        if (blueCarCurrentLane == 1){
            blueCar.style.marginLeft = '150px' 
            blueCarCurrentLane = 2
        } 
        else if (blueCarCurrentLane == 2) {
            blueCar.style.marginLeft = '35px' 
            blueCarCurrentLane = 1
        }
    } 
    else if (code == 'red'){
        if (redCarCurrentLane == 3){
            redCar.style.marginLeft = '150px' 
            redCarCurrentLane = 4
        } 
        else if (redCarCurrentLane == 4) {
            redCar.style.marginLeft = '35px' 
            redCarCurrentLane = 3
        }
    }  
   
}



function generateLaneItem(laneNo, itemType) {
    var item = document.createElement('div')

    item.className = laneItemcolorCode[laneNo - 1] + " " + itemType
    
    var laneId = "lane-".concat(laneNo.toString())
    var lane = document.getElementById(laneId)

    lane.appendChild(item)

    $(item).animate({marginTop: "430px"}, time, "linear")

    setTimeout(function(){item.remove()}, time)

}


function run() {
    var laneNo = 1 + Math.floor(Math.random() * 4)
    var itemId = Math.floor(Math.random() * 2)

    generateLaneItem(laneNo, item[itemId])
}

run()