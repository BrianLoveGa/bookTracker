import { Component, OnInit } from '@angular/core';

import { allBooks, allReaders } from 'src/app/data';
import { Book } from "app/models/book"
import { Reader } from "app/models/reader"
import { LoggerService } from 'src/app/services/logger.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  allBooks: Book[] = allBooks;
  allReaders: Reader[] = allReaders;
  mostPopularBook: Book = allBooks[0];

  

  constructor(private loggerService: LoggerService
              private dataService: DataService) { 
    this.loggerService.log('Creating the Dashboard');
  }

  ngOnInit(): void {
    this.allBooks = this.dataService.getAllBooks();
    this.allReaders = this.dataService.getAllReaders();
    this.mostPopularBook = this.allBooks[0];
  }

  deleteBook(bookId: number): void {
    console.warn(`Delete book not yet implemented( bookId: ${bookId}).` );
  }

  deleteReader(readerId: number): void {
    console.warn(`Delete reader not yet implemented( readerId: ${readerId}).` );
  }

}
