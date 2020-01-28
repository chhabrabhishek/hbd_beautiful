import { Component, OnInit, Renderer, OnDestroy } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import * as Rellax from 'rellax';
import { Wishes } from './wishes.model';
import {NgForm} from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.components.css']
})

export class ComponentsComponent implements OnInit, OnDestroy {

    formData: Wishes

    data : Date = new Date();

    buttonClicked = true;

    page = 4;
    page1 = 5;
    page2 = 3;
    focus;
    focus1;
    focus2;

    date: {year: number, month: number};
    model: NgbDateStruct;

    public isCollapsed = true;
    public isCollapsed1 = true;
    public isCollapsed2 = true;

    state_icon_primary = true;
    isWeekend(date: NgbDateStruct) {
        const d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    }

    isDisabled(date: NgbDateStruct, current: {month: number}) {
        return date.month !== current.month;
    }

    resetForm(form?: NgForm){
        if(form!=null){
            form.resetForm();
        }
        this.formData = {
            name: "",
            wish: ""
        }
    }

    onSubmit(form: NgForm){
        if(!form.value.name || form.value.name === ""){
            window.alert("You don't want her to know your name!");
        }
        if(!form.value.wish || form.value.wish === ""){
            window.alert("You can't leave without wishing, Please wish her something good!");
        }
        let data = form.value;
        this.fireStore.collection('wishes').add(data);
        this.resetForm(form);
        this.buttonClicked = false;
        setTimeout(() => this.buttonClicked = true, 5000);
    }

    constructor(private fireStore: AngularFirestore){

    }

    ngOnInit() {

        this.resetForm();
      var rellaxHeader = new Rellax('.rellax-header');

        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    }
    ngOnDestroy(){
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    }
}
