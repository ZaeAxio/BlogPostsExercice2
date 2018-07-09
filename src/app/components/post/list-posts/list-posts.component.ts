import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../../../models/post.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../../../services/posts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit, OnDestroy {

  private posts: Post[] = [];
  subcription: Subscription;

  constructor(
    private postsService: PostsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.subcription = this.postsService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.loadPosts();
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }

  onNew(){
    this.router.navigate(['/new']);
  }

}
