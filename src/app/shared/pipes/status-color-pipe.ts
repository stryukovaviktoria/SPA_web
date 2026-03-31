import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusColor',
  standalone: true
})
export class StatusColorPipe implements PipeTransform {
  transform(category: string): string {
    switch (category) {
      case 'Makeup':
        return '#ff69b4';
      case 'Skincare':
        return '#00bcd4';
      case 'Hair':
        return '#ff9800';
      default:
        return '#ccc';
    }
  }
}