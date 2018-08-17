function main(){

    var Array = [1,2,3,4,5];
var User1 =  parseInt( "How many elements do you want to print from the array");
var counter1 =0;
if (User1>Array.length)
    {
      alert("ERROR")
    }

    else {
        while (counter1 < User1){
            console.log(array[counter1]);
            counter1++
        }
}
}

main();