//Pattern #1
function sumZero(arr){
  for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] + arr[j] === 0){
            return [arr[i], arr[j]];
        }
    }
  }
}
//Space complexity : O(1)
//Time complexity : O(N^2)