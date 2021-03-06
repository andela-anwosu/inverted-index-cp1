/* eslint-disable no-unused-vars*/
/* eslint-disable no-trailing-spaces*/
/**
 * Class for Inverted Index.
 * 
 * @class
 */
class InvertedIndexClass {
  /**
   * Class Instantiation.
   */
  constructor() {
    this.index = {};
    this.books = {};
    this.parsedBooks = {};
  }

  /**
   * create Index
   * 
   * creates an index of words
   * 
   * @param{string}  filename accepts a string name for a file;
   * @param{object} books is a json object for which an index is to be created
   * @returns{object};
   */
  createIndex(filename, books) {
    this.index[filename] = {};
    this.books = (books);
    books.forEach((singleBook, bookIndex) => {
      singleBook = `${singleBook.title} ${singleBook.text}`;
      singleBook = singleBook.toLowerCase().match(/[\w]+/g);
      singleBook.forEach((term) => {
        if (this.index[filename][term] === undefined) {
          this.index[filename][term] = {};
          this.index[filename][term][bookIndex] = true;
        } else {
          this.index[filename][term][bookIndex] = true;
        }
      });
    });
  }

  /**
   * Get Index
   * 
   * returns created index
   * 
   * @param{string} filename
   * @returns{object};
   */
  getIndex(filename) {
    if (filename) {
      return this.index[filename];
    } 
    return this.index;
  }

  /**
   * Search Index
   * 
   * Searches through the indexes for the search terms
   * 
   * @param {string} filename
   * @param{string} terms
   * @return {Object} An Object Containing 
   * the Various words and their Locations.
   */
  searchIndex(filename, ...terms) {
    let filesToSearch = [];
    const searchResult = {};
    if ((typeof (filename) === typeof []) &&
      (this.index[filename[0]])) {
      filesToSearch.push(filename[0]);
      terms.push(filename);
    } else if (this.index[filename] === undefined) {
      terms.push(filename);
      filesToSearch = filesToSearch.concat(Object.keys(this.index));
    } else {
      filesToSearch.push(filename);
    }
    filesToSearch.forEach((searchKey) => {
      searchResult[searchKey] = {};
      if (typeof (terms) === typeof []) {
        terms = terms.join();
      }
      terms = terms.toLowerCase().match(/[\w']+/g);
      terms.forEach((word) => {
        if (this.index[searchKey][word]) {
          searchResult[searchKey][word] = this.index[searchKey][word];
        } 
      });
    });
    return searchResult;
  }

  /**
   * Valid Files
   *
   * Checks if the passed in JSON object is valid
   *
   * @param {object} jsonObj accepts a json file and checks if it is valid
   * @returns {array} returns an array, the first value being true or 
   * false and the second value being an error message
   * test run
   */
  validFiles(jsonObj) {
    try {
      if (jsonObj.length === 0) {
        throw new Error('Error, empty file');
      }
      this.parsedBooks = JSON.parse(jsonObj);
      const validityCheck = false;
      this.parsedBooks.forEach((entry) => {
        if (entry.title === undefined || entry.text === undefined) {
          throw new Error('Invalid Format');
        }
      });
      return {
        status: true,
        statusMessage: 
          'Success'
      };
    } catch (error) {
      if (error.message === 'Invalid Format') {
        return {
          status: false,
          statusMessage: 
          'this Index takes books with Title and Text property only'
        };
      } else if (error.message === 'Error, empty file') {
        return {
          status: false,
          statusMessage: 
          'Error, empty file'
        };
      } 
      return {
        status: false,
        statusMessage: 
          'Invalid JSON file'
      };
    }
  }
}
