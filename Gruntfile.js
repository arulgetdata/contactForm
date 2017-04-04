module.exports = function(grunt) {

    grunt.initConfig({

        uglify: {
            module: {
                files: {
                    'dist/contactModule.js': ['node_modules/angular/angular.min.js', 'node_modules/bootstrap/dist/bootstrap.min.js', 'node_modules/bootstrap/dist/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'js/app.js', 'js/controller/*.js', 'js/services/*.js']
                }
            }
        },

        cssmin: {
            target: {
                files: {
                    'dist/module.css': ['node_modules/bootstrap/dist/css/bootstrap.min.css', 'style/*.css']
                }
            }
        },
        watch: {
        css: {
            files: ['style/*.css'],
            tasks: ['cssmin']
          },
        js:{
            files: ['js/*.js','js/**/*.js'],
            tasks: ['cssmin'],
        }
},
    
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('build', ['uglify', 'cssmin','watch']);



}