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
        // files: {
        //   "index.html": ["src/index.jade"]
        // }
        files: [{
          expand: true,
          cwd: 'src',
          src: ['*.jade'],
          dest: '',
          ext: '.html'
        }]
      }
    },
    sass: {
      dist: {
        files: {
          'assets/css/main.css': ['src/sass/main.sass']
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
    qunit: {
      all: ['src/tests/**/*.html']
    },
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['jade', 'sass', 'qunit']);
};
