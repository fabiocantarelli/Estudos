//Constantes para chamar as funções

const gulp = require('gulp')
const html = require('gulp-htmlmin')
const sass = require('gulp-sass')
const js = require('gulp-uglify')

//Junta as tarefas em um array 
const ListaDeTarefas = {
    Tarefas:['html', 'scss', 'javascript'],
    Diretorio:['src/*.html', 'src/scss/*.scss', './src/js/*.js']
}

console.log(ListaDeTarefas.Diretorio)

//Comprimi o HTMl
gulp.task("html", function(){
    return gulp.src("./src/*.html")
      .pipe(html({collapseWhitespace:true}))
      .pipe(gulp.dest("./dist/"))
});

//Comprimi o arquivo scss
gulp.task('scss', function() {
    return gulp.src('./src/scss/*.scss')
    .pipe(sass({outputStyle:"compressed"}))
      .pipe(gulp.dest('./dist/scss/'))
});

//Comprimi o js para mjs
gulp.task('javascript', function() {
    return gulp.src(['./src/js/*.js'])
      .pipe(js())
      .pipe(gulp.dest('./dist/js/'))
});

//Observa as taresfas e as executas conforme as mesmas são alteradas
gulp.task('default', gulp.series( function() {
    gulp.watch(ListaDeTarefas.Diretorio, gulp.parallel( ListaDeTarefas.Tarefas ))
}));

