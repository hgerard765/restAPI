'use strict';
module.exports = function(app) {
  var jobqueue = require('../controllers/jobqueueController');

  // jobqueue Routes
  app.route('/jobs')
    .get(jobqueue.list_all_jobs)
    .post(jobqueue.create_a_job);


  app.route('/jobs/:jobId')
    .get(jobqueue.read_a_job)
    .put(jobqueue.update_a_job)
    .delete(jobqueue.delete_a_job);
};
