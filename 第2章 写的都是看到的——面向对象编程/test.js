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