selected = null;
class Task{
    constructor (title, description){
        this.title = title;
        this.description = description;
    }
}

class UI{
    addTaskToList(task){
        const list = document.getElementById('task-list')
        const row = document.createElement('tr');
        row.innerHTML=`
        <td>${task.title}</td>
        <td>${task.description}</td>
        <td><button class='delete'>Delete</td>
        <td><button class='edit'>Edit</td>
        
        `;
        

    document.getElementById('description').blur(); 
    list.appendChild(row);
    this.clearFields();
    }
    
    deleteTask(target) {
        if(target.className==='delete'){
            target.parentElement.parentElement.remove();
        }
    }
    editTask(target) {
        if(target.className==='edit'){
            selected = target.parentElement.parentElement;
            document.getElementById('title').value = selected.cells[0].innerHTML;
            document.getElementById('description').value = selected.cells[1].innerHTML;
            document.getElementById('title').focus();
        }
        
    }

    update(){
        selected.cells[0].innerHTML = document.getElementById('title').value;
        selected.cells[1].innerHTML = document.getElementById('description').value;
    }


    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('description').value = '';
    }

}

document.getElementById('task-form').addEventListener('submit',(e)=>{
    e.preventDefault();   
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    
    const task=new Task(title, description);
    const ui=new UI();
    
    if(title===''||description===''){
        document.getElementById('error').innerHTML="Please fill empty fields";
    }
    else if(selected!=null){
        const ui=new UI();
        ui.update();
        ui.clearFields();
        selected=null;
    } 
    else{
        ui.addTaskToList(task);
        ui.clearFields();
    }
    
})
document.getElementById('task-list').addEventListener('click',(e)=>{
    const ui=new UI();
    ui.deleteTask(e.target);
    e.preventDefault();

});

document.getElementById('task-list').addEventListener('click',(e)=>{
    const ui=new UI();
    ui.editTask(e.target);
    e.preventDefault();

});
 