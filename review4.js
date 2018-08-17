function main() {

    var user2 = parseInt("what is your favorite number?");
    alert(user2);
    aboveOrBelow100(user2)

}




function aboveOrBelow100(user2) {
    if (user2 > 100) {
        alert("your favorite number is greater than 100");
    }
    else if (user2 < 100)
    {
        alert("your favorite number is less than 100");
    }
    else if (user2 == 100) {
        alert("Your favorite number equals 100");
    }
    else
    {
        alert("zero")
    }


    aboveOrBelow100();


}

main();