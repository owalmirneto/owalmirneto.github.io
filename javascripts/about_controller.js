$.get('/api/about.json', function (response) {
  new Vue({ el: '#about', data: { about: response } });
}).done(() => {
  $('.social-icons .social-icon').tooltip()
});
