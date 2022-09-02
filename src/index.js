// Основні сутності: User, Subscription, StreamingService, Show і наслідувані від нього
// Movie, Episode, та Series.

class User {
  constructor() {
    // · subscriptions: підписки користувача.
    this.subscriptions = {};
  }
  subscribe(streamingService) {
    // · subscribe(streamingService): підписує користувача на стрімінговий сервіс.
    // Повертає об’єкт Subscription.
    return this.subscriptions;
  }
}

// Cутність Subscription.
// Aтрибути:
// · streamingService: сервіс, на який оформлена підписка.
// Методи:

class Subscription {
  constructor() {
    this.streamingService = {};
  }
  watch(showName) {
    // · watch(showName): переглянути шоу.
  }
  getRecommendationTrending() {
    // · getRecommendationTrending(): отримати випадкове шоу, яке вийшло цього
    // року. Викликає метод getMostViewedShowsOfYear() стримінгово сервісу та
    // рандомно вибирає елемент масиву, сортує по тривалості.
  }
  getRecommendationByGenre(genre) {
    // · getRecommendationByGenre(genre): отримати випадкове шоу у певному
    // жанрі. Викликає метод getMostViewedShowsOfGenre() стримінгово сервісу,
    // працює так само, як і getRecommendationTrending().
  }
}

// Cутність StreamingService.

class StreamingService {
  constructor() {
    // Aтрибути:
    // · name: назва сервісу.
    // · shows: список усіх релізів на сервісі.
    // · viewsByShowNames: Map, у якій ключем виступає назва шоу, а значенням –
    // кількість його переглядів. Значення повинне збільшуватись після кожного
    // виклику методу watch().
    this.name = {};
    this.shows = {};
    this.viewsByShowNames = {};
  }

  addShow(show) {
    // · addShow(show): додає шоу на стрімінговий сервіс.
  }
  getMostViewedShowsOfYear(year) {
    // · getMostViewedShowsOfYear(year): повертає до десяти найбільш
    // переглянутих шоу, які вийшли в заданому році (менше десяти, якщо загальна
    // кількість шоу менша за 10).
  }
  getMostViewedShowsOfGenre(genre) {
    // · getMostViewedShowsOfGenre(genre): повертає до десяти найбільш
    // переглянутих шоу, які належать до заданого жарну(менше десяти, якщо загальна
    // кількість шоу менша за 10).
  }
}
class Show {
  constructor() {
    // Aтрибути:
    // · name: назва шоу.
    // · genre: жанр (список жанрів заданий заздалегідь у форматі об’єкту).
    // · releaseDate: день релізу.
    this.name;
    this.genre;
    this.releaseDate;
  }

  getDuration() {
    // · abstract getDuration(): повертає тривалість шоу.
  }
}

class Movie extends Show {}
class Episode extends Show {}
class Series extends Show {
  //     Aтрибути:
  // · episodes: список епізодів
}
