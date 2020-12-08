import { Injectable } from '@angular/core';
import { allBooks, allReaders } from '../data';
import { Book } from '../models/book';
import { Reader } from '../models/reader';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private loggerService: LoggerService) {}

  getAllReaders(): Reader[] {
    return allReaders;
  }

  getReaderById(id: number): Reader {
    return allReaders.find((reader) => reader.readerId === id);
  }

  getAllBooks(): Book[] {
    return allBooks;
  }

  getBookById(id: number): Book {
    return allBooks.find((book) => book.bookId === id);
  }
}
