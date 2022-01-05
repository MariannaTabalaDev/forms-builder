
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DragService {

    public dragElements: string[] = ['textarea', 'text', 'button', 'select', 'checkbox'];

    // public fieldsInForm: string[] = [''];

    getData(): string[] {

        return this.dragElements;
    }
}
