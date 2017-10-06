var dotenv = require('dotenv').config();
var github = require('octonode');
var client = github.client();
var ghsearch = client.search();

const projectUsername = process.env.CIRCLE_PROJECT_USERNAME;
const projectReponame = process.env.CIRCLE_PROJECT_REPONAME;
const prAuthor = process.env.CIRCLE_PR_USERNAME;

console.log(`PR author: ${prAuthor}`);

ghsearch.issues({
  q: `type:pr+author:${prAuthor}+state:open+repo:${projectUsername}/${projectReponame}`
}, function (err, response) {
  console.log('Opened:', response.total_count);
});

ghsearch.issues({
  q: `type:pr+author:${prAuthor}+state:closed+repo:${projectUsername}/${projectReponame}+is:merged`
}, function (err, response) {
  console.log('Merged:', response.total_count);
});

ghsearch.issues({
  q: `type:pr+author:${prAuthor}+state:closed+repo:${projectUsername}/${projectReponame}`
}, function (err, response) {
  console.log('Closed:', response.total_count);
});
