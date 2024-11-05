import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-review',
  standalone: true,
  imports: [],
  templateUrl: './user-review.component.html',
  styleUrl: './user-review.component.scss'
})
export class UserReviewComponent {
  @Input() userName: string = "";
  @Input() review: string = "";

  

}
