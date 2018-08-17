class book {
    constructor(bookName, rating, yearReleased) {
        this.bookName = bookName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }
printAllAttributes()
{
    console.log(this.bookName + " Rating; " this.rating + " ");
}



}
functions main(){
    var book1 = new book("harry potter", 5, 1997);
    var book2 = new book("game of throne", 5, 1988);
}
