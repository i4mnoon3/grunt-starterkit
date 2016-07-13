module.exports = function(grunt) {
  grunt.initConfig({
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          },
          pretty: true,
        },
        files: {
          "dist/index.html": ["src/index.jade"]
        }
      }
    },
    sass: {
      dist: {
        files: {
          'dist/assets/css/main.css': ['src/sass/main.sass']
        }
      }
    },
    watch: {
      jade: {
        files: ['src/**/*.jade'],
        tasks: ['jade']
      },
      sass: {
        files: ['src/sass/**/*.sass'],
        tasks: ['sass']
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['jade', 'sass']);
};
