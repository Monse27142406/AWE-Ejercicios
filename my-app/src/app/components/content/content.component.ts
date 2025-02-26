import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { NamesListComponent } from '../names-list/names-list.component';

@Component({
  selector: 'app-content',
  imports: [CounterComponent, NamesListComponent],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {

}
