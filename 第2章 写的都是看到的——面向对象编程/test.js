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

/**
// 图书安全类
var Book = function(title, time, type){
    // 判断执行过程中this是否是当前这个对象（如果是说明是用new创建的）
    if(this instanceof Book){
        this.title = title;
        this.time = time;
        this.type = type;
        // 否则重新创建这个对象
    }else{
        return new Book(title, time, type);
    }
}
var book = Book('JavaScript', '2016', 'js');

console.log(book);　　　　　　　// Book
console.log(book.title);　　　　// JavaScript
console.log(book.time);　　 　　// 2016
console.log(book.type);　　 　　// js
console.log(window.title); 　　// undefined
console.log(window.time);　 　　// undefined
console.log(window.type);　 　　// undefined
**/

/**
function SuperClass(){
    this.books = ['JavaScript', 'html', 'css'];
}
function SubClass(){}
SubClass.prototype = new SuperClass();
var instance1 = new SubClass();
var instance2 = new SubClass();
console.log(instance2.books);　　// ["JavaScript", "html", "css"]
instance1.books.push('设计模式');
console.log(instance2.books);　　// ["JavaScript", "html", "css", "设计模式"]
**/

//构造函数式继承
// 声明父类
function SuperClass(id){
    // 引用类型共有属性
    this.books = ['JavaScript', 'html', 'css'];
    // 值类型共有属性
    this.id = id;
}
// 父类声明原型方法
SuperClass.prototype.showBooks = function(){
    console.log(this.books);
}
// 声明子类
function SubClass(id){
    // 继承父类
    SuperClass.call(this, id);
}
// 创建第一个子类的实例
var instance1 = new SubClass(10);
// 创建第二个子类的实例
var instance2 = new SubClass(11);
instance1.books.push("设计模式");
console.log(instance1.books);　 　　// ["JavaScript", "html", "css", "设计模式"]　
console.log(instance1.id);　　　　// 10
console.log(instance2.books); 　　// ["JavaScript", "html", "css"]
console.log(instance2.id); 　　　　// 11
instance1.showBooks();　　　　　　// TypeError




