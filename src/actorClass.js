export default class Actor{

constructor(name,age){
 		this.name = name;
 		this.age = age;
 }

getName(){
    return this.name;
}

getAge(){
    return this.age;
}

changeName(newname){
    this.name=newname;
}

changeAge(newage){
    this.age=newage;
  }
}
