'use strict'
const childProcess = require('child_process');

function getVersion() {
  let gitTag = 'dev';

  try {
    childProcess.execSync('git fetch --tags', { timmeout: 10 }); // ensure local tags match remote
  } catch (e) {
    console.warn('Failed to fetch tags (network error?), assuming dev');
    return gitTag;
  }

  try {
    gitTag = childProcess.execSync('git describe --exact-match HEAD').toString();
  } catch (e) {
    console.warn('Latest commit is not tagged, assuming dev');
  }
  gitTag = gitTag.replace(/\r?\n|\r/g, '');
  if (!gitTag.match(/\d{1,4}\.\d{1,4}\.\d{1,4}/))
    gitTag = 'dev';

  return gitTag;
}


module.exports = {
  getVersion
}