import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public sliderWidth: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  constructor() {
    this.captions = true;
  }

  ngOnInit() {

  }

  cargarSlider() {
    this.anchuraToSlider = this.sliderWidth;
  }

  reiniciarSlider() {
    this.anchuraToSlider = false;
  }

  getAutor(event) {
    this.autor = event;
  }
}
