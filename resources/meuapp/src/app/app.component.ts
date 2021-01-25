import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meuapp';
  public posts: Post[] = [
    new Post("Joao", "Meu Post", "Sub Joao", "joao@gmail.com", "Minha msg"),
    new Post("Paulo", "Posto do Paulo", "Sub Paulo", "paulo@gmail.com", "Msg do Paulo"),
    new Post("Maria", "Post da Maria", "Sub Maria", "maria@gmail.com", "Msg da Maria"),
    new Post("Carlos", "Meu Post", "Sub Carlos", "Carlos@gmail.com", "Minha msg Carlos"),
    new Post("Eduardo", "Posto do Eduardo", "Sub Eduardo", "Eduardo@gmail.com", "Msg do Eduardo"),
    new Post("Tania", "Post da Tania", "Sub Tania", "Tania@gmail.com", "Msg da Tania"),
    new Post("Kadu", "Meu Post", "Sub Kadu", "Kadu@gmail.com", "Minha msg"),
    new Post("Tomas", "Posto do Tomas", "Sub Tomas", "Tomas@gmail.com", "Msg do Tomas"),
    new Post("Alice", "Post da Alice", "Sub Alice", "Alice@gmail.com", "Msg da Alice"),
  ];
}
