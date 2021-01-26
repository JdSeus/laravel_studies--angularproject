import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from './post';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuapp';
  public posts: Post[];

  constructor(
    public dialog: MatDialog,
    public PostService: PostService
    ) {}

  ngOnInit() {
    this.posts = this.PostService.posts;
  }

  openDialog() {
    const dialogRef = this.dialog.open(PostDialogComponent, {
      width: '600px'
    });
    dialogRef.afterClosed().subscribe(
      (result) => {
        if (result) {
          console.log(result);
        }
      }
    );
  }
}
