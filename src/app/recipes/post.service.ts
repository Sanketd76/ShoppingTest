import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  deletePost(id: string) {
    return this.http.delete(
      'https://angularproject-c2558-default-rtdb.firebaseio.com/posts.json'
    );
  }

  createPost(postdata: Post) {
    this.http
      .post(
        'https://angularproject-c2558-default-rtdb.firebaseio.com/posts.json',
        postdata
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPosts() {
    return this.http
      .get(
        'https://angularproject-c2558-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData: { [key: string]: any }) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              console.log(responseData[key]);
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }
}
