const fs = require('fs-extra')
const pkg = require('pkg');

const OUTPUT = './bin';

(async () => {
  fs.rmSync(OUTPUT, { force: true, recursive: true });
  await pkg.exec('.');
  fs.copySync('./locales', `${OUTPUT}/locales`);
  fs.copySync('./nginx', `${OUTPUT}/nginx`);
  console.log('Done');
})();