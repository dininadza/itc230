'use strict'

let book = [
    {title: "jemima j", author: "jane green", pubdate:2001},
    {title: "the devil wears prada", author: "lauren weisberger", pubdate:2004},
    {title: "me before you", author: "jojo moyes", pubdate:2016},
    {title: "can you keep a secret?", author: "sophie kinsella", pubdate:2005}, 
    {title: "babyville", author: "jane green", pubdate:2004}, 
    {title: "the help", author: "kathryn stockett", pubdate:2011}, 
    {title: "bridget jones diary", author: "helen fielding", pubdate:1999}
];

exports.get = (title) => {
    return book.find((item) => {
        return item.title == title;
    });
    }

exports.delete = (title) => {
    let oldLength = book.length;
    var newBook = book.filter((item) => {
        return item.title !== title;
    })
    book = newBook;
        console.log(book)
    return { deleted: book.length !== oldLength,
           total: book.length }; //books deleted(true) or not(false), how many books left in inventory 
}


console.log (this.delete("you")) //can try deleting one book or two
console.log (this.get("green")) 