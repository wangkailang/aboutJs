//目前很多高级浏览器都支持Function.prototype.bind方法，该方法用来指定函数内部的this指向
Function.prototype.bind = function(context) {
    var self = this;
    return function(){
        return self.apply(context,arguments);
    }
}
var yunxi = {
    name: 'yunxi'
};
 
var func = function(){
    console.log(this.name); // yunxi
}.bind(yunxi);
 
func();

// func这个函数使用调用bind这个方法，并且把对象yunxi作为参数传进去，然后bind函数使用return返回一个函数，
// 当我们调用func()执行这个方法的时候，其实我们就是在调用bind方法内的return返回的那个函数，在返回的那个函数
// 内context的上下文其实就是我们以参数yunxi对象传进去的，因此this指针指向与yunxi这个对象了~ 
// 所以打印出this.name 就是yunxi那个对象的name了;