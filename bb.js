let table = document.querySelector('#table');

let arrayRandom = (length, m ) =>(
    [...new Array(length)].map(() => Math.round(Math.random()*m))
)

let array = arrayRandom(30,99)

let newArray = sliceChunk(array,6)

function createTable(arr){
    for (let subArray of arr) {
        let tr = document.createElement('tr')
        
        for (let elem of subArray) {
            let td = document.createElement('td')
            td.textContent = elem
            tr.appendChild(td)
             
        } 
        table.appendChild(tr);
      
    }
}



createTable(newArray)


console.log(array)