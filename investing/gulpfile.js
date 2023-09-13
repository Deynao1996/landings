const gulp = require('gulp')
const webpack = require('webpack-stream')
const webpack1 = require('webpack')
const browserSync = require('browser-sync')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')

gulp.task('server', function () {
  browserSync({
    server: {
      baseDir: 'dist'
    }
  })

  gulp.watch('src/*.html').on('change', browserSync.reload)
})

gulp.task('watch', function () {
  gulp.watch('src/*.html').on('change', gulp.parallel('html'))
  gulp.watch('src/js/**/*.js').on('change', gulp.parallel('scripts'))
  gulp.watch('src/icons/**/*').on('all', gulp.parallel('icons'))
  gulp.watch('src/img/**/*').on('all', gulp.parallel('images'))
})

gulp.task('html', function () {
  return gulp
    .src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'))
})

gulp.task('scripts', function () {
  return gulp
    .src('src/js/**/*.js')
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream())
})

// gulp.task('video', function () {
//   return gulp
//     .src('src/video/**/*')
//     .pipe(gulp.dest('dist/video'))
//     .pipe(browserSync.stream())
// })

gulp.task('icons', function () {
  return gulp
    .src('src/icons/**/*')
    .pipe(gulp.dest('dist/icons'))
    .pipe(browserSync.stream())
})

gulp.task('images', function () {
  return gulp
    .src('src/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
    .pipe(browserSync.stream())
})

gulp.task('build-js', () => {
  return gulp
    .src('./src/js/main.js')
    .pipe(
      webpack({
        mode: 'development',
        output: {
          filename: 'script.js'
        },
        watch: true,
        devtool: 'source-map',
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        debug: true,
                        corejs: 3,
                        useBuiltIns: 'usage'
                      }
                    ]
                  ]
                }
              }
            }
          ]
        }
      }),
      webpack1
    )
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.stream())
  // .on("end", browserSync.reload);
})

gulp.task('build-prod-js', () => {
  return gulp
    .src('./src/js/main.js')
    .pipe(
      webpack({
        mode: 'production',
        output: {
          filename: 'script.js'
        },
        module: {
          rules: [
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      '@babel/preset-env',
                      {
                        corejs: 3,
                        useBuiltIns: 'usage'
                      }
                    ]
                  ]
                }
              }
            }
          ]
        }
      })
    )
    .pipe(gulp.dest('./dist/'))
})

gulp.task(
  'default',
  gulp.parallel(
    'watch',
    'server',
    // 'styles',
    'scripts',
    'icons',
    'html',
    'images',
    'build-js'
    // 'video'
  )
)
