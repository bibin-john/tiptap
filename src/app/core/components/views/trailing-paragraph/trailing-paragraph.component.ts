import { Component, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


@Component({
  selector: 'app-trailing-paragraph',
  templateUrl: './trailing-paragraph.component.html',
  styleUrls: ['./trailing-paragraph.component.css']
})
export class TrailingParagraphComponent implements OnInit {
  public Editor = ClassicEditor;
  constructor() { }

  ngOnInit(): void {
  }

}
