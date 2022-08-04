import { Component } from "@angular/core";

 @Component({
    selector:'[app-student]',
    templateUrl:'./student.component.html',
    // styleUrls:['./student.component.css']
    styles:[`
    .present{
        color: white;
    }

    .absent {
        color: black;

    }
    `]

 })

export class StudentComponent{
    studentName = 'Xante';
    allowAdd = false;
    studentAddStatus = "No Student Added.";
    studentAdded:boolean = false;
    studentStatus = "present";
    students:string[] = [];
    constructor () {
        console.log(this.studentAdded);
    }
    onUpdateStudentName() {
        this.studentName = "Xante Graham";
    }

    onUpdateStudentNameEvent(ev:Event){
        // console.log(ev);
        // if ((<HTMLInputElement>ev.target).value == "") {
        //     this.allowAdd = false;
        // }
        this.studentName = (<HTMLInputElement>ev.target).value;
        console.log(this.studentName);
        if (this.studentName.length > 0) {
            this.allowAdd = true;

        } else {
            this.allowAdd = false;
        }

    }

    onAddStudentClick = () => {
        this.studentAddStatus = "Student added";
        this.allowAdd = false;
        this.studentAdded = true;
        this.students.push(this.studentName)


    }

    toggleStudentStatus = () => {

        this.studentStatus = this.studentStatus == 'present' ?  'absent': 'present';

    }
}

