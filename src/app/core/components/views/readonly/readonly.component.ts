import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-readonly',
  templateUrl: './readonly.component.html',
  styleUrls: ['./readonly.component.css']
})
export class ReadonlyComponent implements OnInit {
  public Editor = ClassicEditor;
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDisabled() {
    this.isDisabled = !this.isDisabled
  }

}
