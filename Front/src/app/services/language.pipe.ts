import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args != null) {
      if (args == 'spanish')
        switch (value) {
          case 1: return 'Lunes';
          case 2: return 'Martes';
          case 3: return 'Miercoles';
          case 4: return 'Jueves';
          case 5: return 'Viernes';
        }
      if (args == 'italian')
        switch (value) {
          case 1: return 'Lunedì';
          case 2: return 'Martedì';
          case 3: return 'Mercoledì';
          case 4: return 'Giovedì';
          case 5: return 'Venerdì';
        }
    }
    switch (value) {

      case 1: return 'Monday';
      case 2: return 'Tuesday';
      case 3: return 'Wednesday';
      case 4: return 'Thursday';
      case 5: return 'Friday';
    }
    return null;
  }
}
