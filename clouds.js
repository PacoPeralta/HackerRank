var clouds = [0,0,1,0,0,1,0,0];
// Problem: Jumping on the Clouds
function jumpingClouds(clouds) {
    let jumpPath = [];
    let totalJumps = -1;
    for(let index = 0; index < clouds.length; index += 2) {
        if(clouds[index] !== 0) {
            index = index - 1;
        }
        jumpPath.push(index);
        totalJumps++;
    }
    if(jumpPath.pop() !== clouds.length -1) {
        totalJumps++
    }
    console.log(totalJumps);
}

console.time('clouds');
jumpingClouds(clouds);
console.timeEnd('clouds');