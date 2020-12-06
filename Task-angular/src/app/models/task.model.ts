class Task{
    _id: string;
    title: string;
    description: string;
    assignTo: string;
    creationDate: Date;
    author: string;
    constructor(){
        this.title = ""
        this.description = ""
        this.assignTo = ""
        this.creationDate = new Date()
        this.author = ""
    }
}

export default Task;