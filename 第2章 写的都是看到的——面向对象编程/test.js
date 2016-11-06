var Book = function(id, name, price){
    //私有属性
    var num = 1;
    //私有方法
    function checkId(){

    };
    //特权方法
    this.getName =  function(){};
    this.getPrice = function(){};
    this.setName = function(){};
    this.setPrice = function(){};
    //对象的公有属性
    this.id = id;
    //对象的公有方法
    this.copy = function(){};
    //构造器
    this.setName(name);
    this.setPrice(price);
}
//类静态的公有属性（对象不能访问）
Book.isChinese = true;
//类静态公有方法(对象不能访问)
Book.resetTime = function(){
    console.log("new time");
};
Book.prototype = {
    //公有属性
    isJSBook : false,
    //公有方法
    display : function(){}
}

var b = new Book(11, "javascript", 50);
console.log(b.num);
console.log(b.isJSBook);
console.log(b.id);
console.log(b.isChinese);
console.log(Book.isChinese);
Book.resetTime();

/**
 undefined
 test.js:36 false
 test.js:37 11
 test.js:38 undefined
 test.js:39 true
 test.js:25 new time
 *
 */


