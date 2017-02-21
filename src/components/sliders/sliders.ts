import { Component/*, Input*/ } from '@angular/core';
// import { Slides } from 'ionic-angular';

@Component({
  selector: 'cm-sliders',
  templateUrl: 'sliders.html'
})
export class SlidersComponent {
  // @Input()
  constructor( ) {
    //console.log(TabsPage);
  }
  mySlideOptions = {
    pager: true
  };
  slides = [
    {
      image: "assets/img/500-500.png",
    },
    {
      image: "assets/img/500-500.png",
    },
    {
      image: "assets/img/500-500.png",
    }
  ];
}
