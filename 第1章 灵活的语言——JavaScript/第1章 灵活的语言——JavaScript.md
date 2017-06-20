结束了4年的大学学习生活，小白信心满满地来到应聘的M公司。今天是入职的第一天，项目经理分下来一个验证表单功能的任务，内容不多，仅需要验证用户名、邮箱、密码等。

# 入职第一天

小白接到需求看了看，感觉很简单，于是便写下几个函数。

```
function checkName(){
　　// 验证姓名 
}
function checkEmail(){
　　// 验证邮箱
}
function checkPassword(){
　　// 验证密码
}
......
```

于是要把自己的代码提交到团队项目里。

正在此时，一位工作多年的程序员小铭看到小白要提交的代码摇了摇头说：“小白，等一下，先不要提交。”

“怎么了？”

“你创建了很多全局变量呀。”

“变量？我只是写了几个函数而已。”

“函数不是变量么？”小铭反问道。

此时小白不知所措，心想：“难道函数是变量？”脸瞬间沉了下来。

# 函数的另一种形式

小铭见此情形忙笑着说：“别着急，你看，如果我这么声明几个变量来实现你的功能你看可以么？”

```
var checkName = function(){
　　// 验证姓名
}
var checkEmail = function(){
　　// 验证邮箱
}
var checkPassword = function(){
　　// 验证密码
}
```

一样的，只不过……”

“对，只不过这个在用的时候要提前声明，但是这么看你就会发现你创建了3个函数保存在变量里来实现你的功能，而你写的是将你的变量名放在function后面而已，它也代表了你的变量。所以说你也声明了3个全局变量。”

“这有什么问题呢？”

“从功能上讲当然没问题，但是今天你加入了我们的团队，在团队开发中你所写的代码就不能只考虑自己了，也要考虑不影响到他人，如果别人也定义了同样的方法就会覆盖掉原有的功能了。如果你定义了很多方法，这种相互覆盖的问题是很不容易察觉到的。”

“那我应该如何避免呢？”小白问道。

“你可以将它们放在一个变量里保存，这样就可减少覆盖或被覆盖的风险，当然一旦被覆盖，所有的功能都会失效，这种现象也是很明显的，你自然也会很轻易觉察到。”

“可是我该如何做呢？”小白迫不及待地追问道。

# 用对象收编变量

“一猜你就会问。”

“好吧，请你先简单地说一下。”

“对象你知道吧，它有属性和方法，而如果我们要访问它的属性或者方法时，可通过点语法向下遍历查询得到。我们可以创建一个检测对象，然后把我们的方法放在里面。”

```
var CheckObject = {
　　checkName : function(){
　　　　// 验证姓名
　　},
　　checkEmail : function(){
　　　　// 验证邮箱
　　},
　　checkPassword : function(){
　　　　// 验证密码
　　}
}
```

“此时我们将所有的函数作为CheckObject 对象的方法，这样我们就只有一个对象，而我们要想使用它们也很简单，比如检测姓名CheckObject.checkName()，只是在我们原来使用的函数式前面多了一个对象名称。”

“哦，这样呀，但是我们既然可以通过点语法来使用方法，我们是不是也可以这么创建呢？”


# 对象的另一种形式

“当然，不过首先你要声明一个对象，然后给它添加方法，当然在JavaScript中函数也是对象，所以你可以这么做：”

```
var CheckObject = function(){};
CheckObject.checkName = function(){
　　// 验证姓名
}
CheckObject.checkEmail = function(){
　　// 验证邮箱
}
CheckObject.checkPassword = function(){
　　// 验证密码
}
```

“使用和前面的方式是一样的，比如CheckObject.checkName()，”小铭接着说，“现在虽然能满足你的需求，但当别人想用你写的对象方法时就有些麻烦了，因为这个对象不能复制一份，或者说这个对象类在用new关键字创建新的对象时，新创建的对象是不能继承这些方法的。”

“但是复制又有什么用呢？”小白不解地问道。

“给你举个例子吧，假如你喜欢设计模式，你买了这本书，然后回去你的小伙伴看见了，感觉很有用，他们也想要怎么办？书就这一本。但如果你买的是一台打印机，那么好吧，即使你的小伙伴再多，你也有能力给他们每个人打印一本。”

“哦，有些明白了，但是我该如何做到呢？”

# 真假对象

小铭解释说：“如果你想简单地复制一下，你可以将这些方法放在一个函数对象中。”于是小铭将代码写下。

```
var CheckObject = function(){
　　return {
　　　　checkName : function(){
　　　　　　// 验证姓名
　　　　},
　　　　checkEmail : function(){
　　　　　　// 验证邮箱
　　　　},
　　　　checkPassword : function(){
　　　　　　// 验证密码
　　　　}
　　}
}
```

小白看了看代码，思考一下说：“哦，你写的看上去是，当每次调用这个函数的时候，把我们之前写的那个对象返回出来，当别人每次调用这个函数时都返回了一个新对象，这样执行过程中明面上是CheckObject 对象，可实际上是返回的新对象。这样每个人在使用时就互不影响了。比如想检测邮箱可以像这样吧。” 

```
var a = CheckObject ();
a.checkEmail ();
```

# 类也可以

“嗯，对”小铭接着说，“虽然通过创建了新对象完成了我们的需求，但是他不是一个真正意义上类的创建方式，并且创建的对象a和对象CheckObject没有任何关系（返回出来的对象本身就与CheckObject对象无关），所以我们还要对其稍加改造一下。”

```
var CheckObject = function(){
　　this.checkName = function(){
　　　　// 验证姓名
　　}
　　this.checkEmail = function(){
　　　　// 验证邮箱
　　}
　　this.checkPassword = function(){
　　　　// 验证密码
　　}
}
```

“像上面这样的对象就可以看成类了。”小铭继续说。

“那么我们使用它还像之前那样创建对象的方法创建么？”小白追问道。

“不，既然是一个类，你就要用关键字new来创建了。”

```
var a = new CheckObject();
a.checkEmail();
```

“这样你就可以用CheckObject类创建出来的对象了。”

“如果我和我的小伙伴们都对类实例化了（用类创建对象），那么我们每个人都会有一套属于自己的方法吧。”小白不解地问道。

# 一个检测类

“当然，你看，我们是把所有的方法放在函数内部了，通过this定义的，所以每一次通过new关键字创建新对象的时候，新创建的对象都会对类的this上的属性进行复制。所以这些新创建的对象都会有自己的一套方法，然而有时候这么做造成的消耗是很奢侈的，我们需要处理一下。”

```
var CheckObject = function(){};
CheckObject.prototype.checkName = function(){
　　// 验证姓名
}
CheckObject.prototype.checkEmail = function(){
　　// 验证邮箱
}
CheckObject.prototype.checkPassword = function(){
　　// 验证密码
}
```

“这样创建对象实例的时候，创建出来的对象所拥有的方法就都是一个了，因为它们都要依赖prototype原型依次寻找，而找到的方法都是同一个，它们都绑定在CheckObject对象类的原型上，”小铭继续说，“这种方式我们要将prototype写很多遍，所以你也可以这样做。”

```
var CheckObject = function(){};
CheckObject.prototype = {
　　checkName : function(){
　　　　// 验证姓名
　　},
　　checkEmail : function(){
　　　　// 验证邮箱
　　},
　　checkPassword : function(){
　　　　// 验证密码
　　}
}
```

“但有一点你要记住，这两种方式不能混着用，否则一旦混用，如在后面为对象的原型对象赋值新对象时，那么它将会覆盖掉之前对prototype对象赋值的方法。”小铭补充说。

“知道了，不过我们要使用这种方式定义的类是不是要像下面这样呢？”小白问道。

```
var a = new CheckObject();
a.checkName();
a.checkEmail();　　
a.checkPassword();
```

# 方法还可以这样用

“没错，但是你发现没，你调用了3个方法，但是你对对象a书写了3遍。这是可以避免的，那就要在你声明的每一个方法末尾处将当前对象返回，在JavaScript中this指向的就是当前对象，所以你可以将它返回。例如我们开始写的第一个对象还记得么？改动它很简单，像下面这样就可以。”


```
var CheckObject = {
　　checkName : function(){
　　　　// 验证姓名
　　　　return this;
　　},
　　checkEmail : function(){
　　　　// 验证邮箱
　　　　return this;
　　},
　　checkPassword : function(){
　　　　// 验证密码
　　　　return this;
　　}
}
```

“此时我们要想使用他就可以这样：”

```
CheckObject.checkName().checkEmail().checkPassword();
```

“当然同样的方式还可以放到类的原型对象中。”

```
var CheckObject = function(){};
CheckObject.prototype = {
　　checkName : function(){
　　　　// 验证姓名
　　　　return this;
　　},
　　checkEmail : function(){
　　　　// 验证邮箱
　　　　return this;
　　},
　　checkPassword : function(){
　　　　// 验证密码
　　　　return this;
　　}
}
```

“但使用时候也要先创建一下：” 

```
var a = new CheckObject();
a.checkName().checkEmail().checkPassword();
```

# 函数的祖先

小白回顾着这些从未见过的代码方式内心很激动，小铭见小白对JavaScript如此着迷，于是补充了两句。

“如果你看过prototype.js的代码，我想你会想到下面的书写方式。”

“prototype.js是什么？”小白问道。

“一款JavaScript框架，里面为我们方便地封装了很多方法，它最大的特点就是对源生对象（JavaScript语言为我们提供的对象类，如Function、Array、Object等等）的拓展，比如你想给每一个函数都添加一个检测邮箱的方法就可以这么做。”

```
Function.prototype.checkEmail = function(){
　　// 验证邮箱
}
```

“这样你在使用这个方法的时候就比较方便了，如果你习惯函数形式，那么你可以这么做。”

```
var f = function(){};
f.checkEmail();
```

“如果你习惯类的形式你也可以这么做。”

```
var f = new Function();
f.checkEmail();
```

“但是你这么做在我们这里是不允许的，因为你污染了原生对象Function，所以别人创建的函数也会被你创建的函数所污染，造成不必要的开销，但你可以抽象出一个统一添加方法的功能方法。”

```
Function.prototype.addMethod = function(name, fn){
　　this[name] = fn;
}
```

“这样如果你想添加邮箱验证和姓名验证方法你可以这样做。”

```
var methods = function(){};
```

或者

```
var methods = new Function();
methods.addMethod('checkName', function(){
　　// 验证姓名
});
methods.addMethod('checkEmail', function(){
　　// 验证邮箱
});
methods.checkName();
methods.checkEmail();
```

# 可以链式添加吗

“呀，这种方式很奇特呀。不过我想链式添加方法，是不是在addMethod中将this返回就可以呀，这么做可以么？”

```
Function.prototype.addMethod = function(name, fn){
　　this[name] = fn;
　　return this;
}
```

“当然，所以你再想添加方法就可以这样了：”

```
var methods = function(){};
methods.addMethod('checkName', function(){
　　// 验证姓名
}).addMethod('checkEmail', function(){
　　// 验证邮箱
});
```

“那么，小白，我问你，我如果想链式使用你知道该如何做么？”

小白想了想说：“既然添加方法的时候可以将this返回实现，那么添加的每个方法将this返回是不是可以实现呢？”

于是小白这么写下：

```
var methods = function(){};
methods.addMethod('checkName', function(){
　　// 验证姓名
　　return this;
}).addMethod('checkEmail', function(){
　　// 验证邮箱
　　return this;
});
```

然后测试一下：

methods.checkName().checkEmail();

“真的可以呀！”小白兴奋地说。

# 换一种方式使用方法

“可是在你测试的时候，你用的是函数式调用方式？对于习惯于类式调用方式的同学来说，他们可以这样简单更改一下。”

```
Function.prototype.addMethod = function(name, fn){
　　this.prototype[name] = fn;
}
```

“此时我们还按照上一种方式添加方法。”

```
var Methods = function(){};
methods.addMethod('checkName', function(){
　　// 验证姓名
}).addMethod('checkEmail', function(){
　　// 验证邮箱
});
```

“但是我们在使用的时候要注意了，不能直接使用，要通过new关键字来创建新对象了。”

```
var m = new Methods();
m.checkEmail();
```

小白兴奋地看着这一行行的代码情不自禁地叫了一声“这正是一种艺术”。

小铭笑着说：“JavaScript是一种灵活的语言，当然函数在其中扮演着一等公民。所以使用JavaScript，你可以编写出更多优雅的艺术代码。” 