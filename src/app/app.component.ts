import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./card/card.component";
import { ICourse } from './app.components.models';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'futureCode';

  courses:ICourse[]=[
    {
      id:1,
      imgUrl:"assets/images/portfolio-1.jpg",
      title:"First Course",
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
    }
    ,
    {
      id:2,
      imgUrl:"assets/images/portfolio-2.jpg",
      title:"Second Course",
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
    }
    ,
    {
      id:3,
      imgUrl:"assets/images/portfolio-3.jpg",
      title:"Third Course",
      desc:"Some quick example text to build on the card title and make up the bulk of the card's content."
    }
  ]

  // firstCourse= this.courses[0]
  // secondCourse= this.courses[1]
  // thirdCourse= this.courses[2]


  onCourseClicked(course:ICourse){
    console.log(course.id);
    
  }
}
