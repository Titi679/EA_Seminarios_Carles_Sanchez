import { Component, Input, Output, EventEmitter } from '@angular/core';
import {CommonModule, NgIf, UpperCasePipe} from '@angular/common';
import { Post } from '../models/post';
import { User } from '../models/user';
import { PostService } from '../services/post.service';
import { FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css'],
  imports: [ NgIf, UpperCasePipe, CommonModule, FormsModule],
  standalone: true,
})
export class PostDetailsComponent {
  @Input() post?: Post;

  constructor(public postService: PostService) {
  }

  update: boolean= false;
  

  updateEdit(state: boolean) {
    this.update = state;
  }
}