import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.css'
})
export class TodosComponent {
  input:any=""
input1=""
todosarr:any=[];
edit1:any={status:false,idx:null};

add() {
  if (this.input.trim() !== "" && this.input1.trim() !== "") {
    if(this.edit1.status) {
      this.todosarr[this.edit1.idx]={ title: this.input, des: this.input1,checked:false };
      this.input = "";
      this.input1 = "";
      this.edit1.status=false;
      this.edit1.idx=null
    }
    else
    {
      this.todosarr.push({ title: this.input, des: this.input1,checked:false });
      this.input = "";
      this.input1 = "";
    }
  
  }
}

disable(){
  if(this.input1.trim()==="" ||  this.input.trim()==="")
  return true;
  else
  return false
}
linethrough(index:number){
this.todosarr[index].checked=!this.todosarr[index].checked
}
delete(index:number){
this.todosarr.splice(index,1)
}
edit(index:number){
 this.input=this.todosarr[index].title
 this.input1=this.todosarr[index].des
 this.edit1.status=!this.edit1.status
 this.edit1.idx=index

}
}
