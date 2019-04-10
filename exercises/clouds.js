// Problem: Jumping on the Clouds
function jumpingClouds() {
    const clouds = [0,0,1,0,0,1,0,0];
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
    return totalJumps;
}

//console.time('clouds');
export default jumpingClouds;
//console.timeEnd('clouds');