    
    // Parent class.
    class Media {
        constructor (title) {
        this._title = title; 
        this._isCheckedOut = false; 
        this._ratings = [];
        }
        set isCheckedOut (newValue) {
        this._isCheckedOut = newValue;
        }
        get title () {
        return this._title;
        }
        get isCheckedOut () {
        return this._isCheckedOut;
        }
        get ratings () {
        return this._ratings;
        }
        getAverageRating() {
        let ratingsSum = this._ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        const lengthOfArray = this._ratings.length;
        return ratingsSum / lengthOfArray;
        }
        toggleCheckOutStatus() {
        this._isCheckedOut = !this._isCheckedOut;
        }
        addRating (value) {
        this._ratings.push(value);
        }
    };
    
    //  subclass of the media parent class. Inherits properties and methods
    class Book extends Media {
        constructor (author, title, pages) {
        super(title); 
        this._author = author; 
        this._pages = pages;
        }
        get author () {
        return this._author; 
        }
        get pages () {
        return this._pages;
        }
    };
    //  subclass of the media parent class. Inherits properties and methods
    class Movie extends Media {
        constructor (director, title, runTime) {
        super(title); 
        this._director = director; 
        this._runTime = runTime;
        }
        get director () {
        return this._director; 
        }
        get runTime () {
        return this._runTime;
        }
    };
    //  subclass of the media parent class. Inherits properties and methods
    class CD extends Media {
        constructor (artist, title, songs, isCheckedOut, ratings) {
        super(title, isCheckedOut, ratings); 
        this._artist = artist; 
        this._songs = songs;
        }
        get artist () {
        return this._artist; 
        }
        get songs () {
        return this._songs;
        }
    };
    // creates an instance of the book class
    const historyOfEverything = new Book("Bill Bryson", 'A Short History of Nearly Everything', 544);

    historyOfEverything.toggleCheckOutStatus();  // changes the value of the propertie
    console.log(historyOfEverything.isCheckedOut);  // logs true
    historyOfEverything.addRating(4);
    historyOfEverything.addRating(5);
    historyOfEverything.addRating(5);
    console.log(historyOfEverything.getAverageRating());  // logs the average of the sum of all ratings
    
    // creates an instance of the Movie class
    const speed = new Movie('Jan de Bont', 'Speed', 116);
    speed.toggleCheckOutStatus();
    console.log(speed.isCheckedOut);
    console.log(speed.getAverageRating());
    