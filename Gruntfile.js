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
        }
    
    });


    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('build', ['uglify', 'cssmin']);



}