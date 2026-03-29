import { Component } from '@angular/core';
import { AppInfo } from '../../shared/models/appInfo';

@Component({
  selector: 'cosm-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  public headerConfig: AppInfo = {
    title: 'Beauty Store',
    year: 2026
  };
}