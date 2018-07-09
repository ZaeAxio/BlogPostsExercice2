import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private posts: Post[] = [];
  postSubject: Subject<Post[]> = new Subject<Post[]>();

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.posts);
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts
    this.savePosts();
  }

  deletePost(post: Post) {
    const element = this.posts.findIndex(
      (elementAtIndex) => {
        if(elementAtIndex === post){
          return true;
        }
      }
    );
    this.posts.splice(element, 1);
    this.emitPosts();
    this.savePosts();
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  loadPosts() {
    firebase.database().ref('/posts').on(
      'value', (data) => {
        this.posts = data.val() ? data.val() : [];
        this.emitPosts();
      }
    );
    this.emitPosts();
  }
}
