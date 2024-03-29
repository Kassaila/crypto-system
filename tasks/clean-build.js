/**
 * Clean build folder
 */

const del = require('del');

const global = require('../gulp-config.js');

module.exports = function () {
  const config = {
    force: true,
    dot: true,
  };

  const delFolders = [
    `./${global.folder.build}/css/**`,
    `./${global.folder.build}/js/**`,
    `./${global.folder.build}/**/*.html`,
  ];

  return async () => {
    const deletedPaths = await del(delFolders, config);

    // log paths for deleted files & directories
    // console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
  };
};
