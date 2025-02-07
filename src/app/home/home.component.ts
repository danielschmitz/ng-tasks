import { Component, inject } from '@angular/core';
import { HomeService } from './home.service';
import { CoreModule } from '../core.module';

@Component({
  selector: 'app-home',
  imports: [CoreModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  home$ = inject(HomeService).helloWorld();
}
