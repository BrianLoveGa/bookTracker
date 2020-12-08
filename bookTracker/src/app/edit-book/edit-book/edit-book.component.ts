import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  selectedBook: Book;

  constructor(private route: ActivatedRoute,
              private dataService : DataService) { }

  ngOnInit() {
    let bookId: number = parseInt(this.route.params['id']);
    this.selectedBook = this.dataService.getBookById(bookId);
  }

}
