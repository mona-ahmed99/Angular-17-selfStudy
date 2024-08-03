import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICourse } from '../app.components.models';
import { NgClass, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgClass,NgSwitch,NgSwitchCase, NgSwitchDefault],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true }) course: ICourse = {} as ICourse
  @Input({ required: true }) index!: number
  @Output() viewCourseEmitter = new EventEmitter()


  viewCourse(): void {
    this.viewCourseEmitter.emit(this.course)
  }
}
