$.get('/api/about.json', function (response) {
  new Vue({ el: '#about', data: { about: response, contacts: response.contacts } });
}).done(() => {
  $('.social-icons .social-icon').tooltip()
});
