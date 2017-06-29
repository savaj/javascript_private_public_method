var student = function(name,College,teacher) {
this.name = name || "";
this.college = college || "";
this.teacher = teacher || 200; 
}

Private:
var test = function(){
this.teacher = teacher + 200;
}

Public:
this.test1 = function(){
test();
console.log(this.teacher);
}



