
function getNumber(a = 99, b = 0){
    return Math.floor(Math.random()* (a-b)+b)
}
function getColor(a = 100){
   let r = getNumber(256),
       g = getNumber(256),
       b = getNumber(256);
   return `rgb(${r}, ${g}, ${b}, ${a/100})`
}
   
function sliceChunk(arr, size){
    let res = []
    for(let i = 0; i < arr.length; i += size){
        let chunk = arr.slice(i, i+size)
        res.push(chunk)
    }
    return res
}
