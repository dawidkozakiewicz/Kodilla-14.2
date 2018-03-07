var movies = [{
      id: 1,
      title: 'Harry Potter',
      desc: 'Film o czarodzieju.',
      obra: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Harry_Potter_wordmark.svg/2180px-Harry_Potter_wordmark.svg.png'
   },

   {
      id: 2,
      title: 'Król Lew',
      desc: 'Film o królu sawanny.',
      obra: 'https://gallery.yopriceville.com/var/albums/Free-Clipart-Pictures/Cartoons-PNG/King_Lion_and_PNG_Image.png?m=1438656901'
   },

   {
      id: 3,
      title: 'Walking Dead',
      desc: 'Film o przetrwaniu podczas apokalipsy zombie.',
      obra: 'https://i.pinimg.com/originals/ae/cd/9d/aecd9dc71451d244e7d801b1a659065b.jpg'
   },

   {
      id: 4,
      title: 'Breaking Bad',
      desc: 'Film o niezwykłej przemianie wewnętrznej.',
      obra: 'https://imgc.allpostersimages.com/img/print/posters/breaking-bad-i-am-the-one-who-knocks_a-G-9715138-0.jpg'
   },


   {
      id: 5,
      title: 'Californication',
      desc: 'Film o beztroskim życiu w Californii (ale tylko pozornie beztroskim).',
      obra: 'https://images-na.ssl-images-amazon.com/images/I/91zWVYWSlVL._SY445_.jpg'
   },

   {
      id: 6,
      title: 'Bloodline',
      desc: 'Film o mrocznych tajemnicach szanowanej i wpływowej rodziny z Florydy.',
      obra: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU4OTY0MzM1OV5BMl5BanBnXkFtZTgwMjkxMzE0MjI@._V1_UY268_CR3,0,182,268_AL_.jpg'
   }

];

var moviesElements = movies.map(function(lala) {
   return React.createElement('li', {
         key: lala.id
      },
      React.createElement('h2', {}, lala.title),
      React.createElement('p', {}, lala.desc),
      React.createElement('img', {
         src: lala.obra,
         width: 150
      }, null)
   );
});

var element =
   React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów:'),
      React.createElement('ul', {}, moviesElements)
   );





ReactDOM.render(element, document.getElementById('app'));
