import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from './models/todo.model';
import { filtresValids } from '../filtre/filtre.actions';

@Pipe({
  name: 'filtreTodo'
})
export class FiltrePipe implements PipeTransform {
  
  transform(todos: Todo[], filtre: filtresValids): Todo[] {
    
    switch ( filtre ) {
      case 'completades' :
        return todos.filter( todo => todo.completat);
      
      case 'pendents':
        return todos.filter( todo => !todo.completat);

      default:
        return todos;

    }
  }
}
