const { src, dest } = require("gulp");
const babel = require("gulp-babel");

function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = function () {
  return src("src/*.js").pipe(babel()).pipe(dest("output/"));
};
