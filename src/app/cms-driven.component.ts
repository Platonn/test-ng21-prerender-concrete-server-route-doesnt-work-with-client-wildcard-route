import { Component } from '@angular/core';

@Component({
  selector: 'app-cms-driven',
  template: 'CMS Driven component renders inside child components dynamically',
})
export class CmsDrivenComponent {
  // This component is supposed to read the current route URL
  // and fetch CMS data for this URL from backend
  // and then render dynamically child components based on CMS data.
}
