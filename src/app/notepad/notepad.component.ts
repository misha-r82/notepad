import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {
public header: string;
  constructor(private notepad:NotesService) { }

  ngOnInit() {
  }

}
