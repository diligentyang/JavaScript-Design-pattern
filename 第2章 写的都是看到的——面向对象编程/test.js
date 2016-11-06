/*---------------
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

--------------------*/
/**
 undefined
 test.js:36 false
 test.js:37 11
 test.js:38 undefined
 test.js:39 true
 test.js:25 new time
 *
 */

/**
// 利用闭包实现
var Book = (function() {
    //静态私有变量
    var bookNum = 0;
    //静态私有方法
    function checkBook(name) {
    }
    //返回构造函数
    return function(newId, newName, newPrice) {
        //私有变量
        var name, price;
        //私有方法
        function checkID(id){}
        //特权方法
        this.getName = function(){};
        this.getPrice = function(){};
        this.setName = function(){};
        this.setPrice = function(){};
        //公有属性
        this.id = newId;
        //公有方法
        this.copy = function(){};
        bookNum++;
        if(bookNum > 100)
            throw new Error('我们仅出版100本书.');
        //构造器
        this.setName(name);
        this.setPrice(price);
    }
})();
Book.prototype = {
    //静态公有属性
    isJSBook : false,
    //静态公有方法
    display : function(){}
};
**/


/**
// 利用闭包实现
var Book = (function() {
    //静态私有变量
    var bookNum = 0;
    //静态私有方法
    function checkBook(name) {}
    //创建类
    function _book(newId, newName, newPrice) {
        //私有变量
        var name, price;
        //私有方法
        function checkID(id){}
        //特权方法
        this.getName = function(){};
        this.getPrice = function(){};
        this.setName = function(){};
        this.setPrice = function(){};
        //公有属性
        this.id = newId;
        //公有方法
        this.copy = function(){};
        bookNum++
        if(bookNum > 100)
            throw new Error('我们仅出版100本书.');
        //构造器
        this.setName(name);
        this.setPrice(price);
    }
    //构建原型
    _book.prototype = {
        //静态公有属性
        isJSBook : false,
        //静态公有方法
        display : function(){}
    };
    //返回类
    return _book;
})();
**/

