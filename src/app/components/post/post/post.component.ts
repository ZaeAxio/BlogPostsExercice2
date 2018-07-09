import { Component, OnInit, Input } from '@angular/core';
import { PostsService } from '../../../services/posts.service';
import { Post } from '../../../models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(private postsService: PostsService) { }

  ngOnInit() {
  }

  onLike(like: boolean): void {
    like ? this.post.loveIts++ : this.post.loveIts--;
    this.postsService.savePosts();
  }

  onDelete() {
    this.postsService.deletePost(this.post);
  }

}
