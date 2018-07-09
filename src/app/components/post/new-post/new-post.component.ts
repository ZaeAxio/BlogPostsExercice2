import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Post } from '../../../models/post.model';
import { PostsService } from '../../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  onSubmit() {
    const title = this.form.value['title'];
    const content = this.form.value['content'];
    const post = new Post(title, content);

    this.postsService.addPost(post);

    this.router.navigate(['/posts']);
  }

}
