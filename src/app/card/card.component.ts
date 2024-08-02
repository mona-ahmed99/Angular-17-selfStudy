import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../app.components.models';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) course: ICourse = {} as ICourse

  @Output() viewCourseEmitter = new EventEmitter()


  viewCourse(): void {
    this.viewCourseEmitter.emit(this.course)
  }
}
