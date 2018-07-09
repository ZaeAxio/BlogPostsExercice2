import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { ListPostsComponent } from './components/post/list-posts/list-posts.component';
import { NewPostComponent } from './components/post/new-post/new-post.component';
import { HeaderComponent } from './components/header/header.component';

import { PostsService } from "./services/posts.service";
import { PostComponent } from './components/post/post/post.component';

const appRoutes: Routes = [
  { path: 'posts', component: ListPostsComponent },
  { path: 'new', component: NewPostComponent },
  { path: '', redirectTo: '/posts', pathMatch: 'full' },
  { path: '**', redirectTo: '/posts', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent,
    ListPostsComponent,
    NewPostComponent,
    HeaderComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
