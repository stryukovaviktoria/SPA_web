import { Component } from '@angular/core';
import { AppInfo } from '../../shared/models/appInfo';

@Component({
  selector: 'cosm-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class FooterComponent {
  public footerConfig: AppInfo = {
    title: 'Beauty Store',
    year: new Date().getFullYear()
  };
}