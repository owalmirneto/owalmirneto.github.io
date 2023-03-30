const ExperiencesController = {
  render() {
    $.get('/api/jobs.json', function (response) {
      new Vue({ el: '#experiences', data: { jobs: response.jobs } });
    });
  }
}

export { ExperiencesController }
