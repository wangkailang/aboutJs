//----------------
//
//call()与apply()的区别：功能一样。第二个参数形式不一样。call传递多个参数，是任意形式。apply第二个参数必须是数组形式。
//a.call(b,2,3); ==>  a.apply(b,[2,3]);//数组形式传入
//
//------------------

//------- readme -------------//
//1. call和apply 最常见的用途是改变函数体内的this指向
//---------------------------//
//


//----------- call ------------//
//call方法: 调用一个对象的一个方法，以另一个对象替换当前对象。

//**********
//实例1
//************
function Person(){
	this.name = 'Wang';
	this.getName = function(){
		console.log(this.name);
	}
}

function Person_Liu(){
	this.name = 'Liu';
}
var person_Liu = {
	name:'Liu'
}

var per = new Person();

per.getName();
//==> 'Wang'

per.getName.call(Person_Liu());
// 调用per对象的getName方法，以Person_Liu对象替换当前的per对象
//==> 'Liu'

per.getName.call(person_Liu);
//==> 'Liu'


//**********
//实例2
//************
document.getElementById("oDiv").onclick = function(){
    console.log(this); // this 就指向于div元素对象了
    var func = function(){
        console.log(this); // 打印出window对象
    }
    func();
}

//使用call或者apply方法来改变this的指针
document.getElementById("oDiv").onclick = function(){
    console.log(this); // this 就指向于div元素对象了
    var func = function(){
        console.log(this); // 就指向于div元素对象了
    }
    func.call(this);
}

// -----------------------------// 


//使用call或者apply来继承对象的方法；实质也就是改变this的指针了；
var Yunxi = function(name){
    this.name = name;
};
 
var Longen = function(){
    Yunxi.apply(this,arguments);
};
 
Longen.prototype.getName = function(){
    return this.name;
};
 
var longen = new Longen("tugenhua");
console.log(longen.getName());  // 打印出tugenhua

// 先实例化Longen这个对象，把参数传进去，之后使用Yunxi.apply(this,arguments)这句代码来改变Longen这个对象的this的指针，
// 使他指向了Yunxi这个对象，因此Yunxi这个对象保存了longen这个实例化对象的参数tugenhua，因此当我们调用longen.getName这个
// 方法的时候，我们返回this.name，即我们可以认为返回的是 Yunxi.name 因此返回的是 tugenhua，我们只是借用了下Yunxi这个对象
// 内的this.name来保存Longen传进去的参数而已