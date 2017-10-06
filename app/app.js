var dotenv = require('dotenv').config();
var github = require('octonode');
var client = github.client();
var ghsearch = client.search();

const projectUsername = process.env.CIRCLE_PROJECT_USERNAME;
const projectReponame = process.env.CIRCLE_PROJECT_REPONAME;
const prAuthor = process.env.CIRCLE_PR_USERNAME;

ghsearch.issues({
  q: `type:pr+author:${prAuthor}+state:closed+repo:${projectUsername}/${projectReponame}+is:merged`
}, function (err, response) {
  console.log('merged: ', response.total_count);
  let mergedCount = parseInt(response.total_count) + 1;
  console.log(`If this is merged, it will be your PR #${mergedCount} in this project!`);
});
