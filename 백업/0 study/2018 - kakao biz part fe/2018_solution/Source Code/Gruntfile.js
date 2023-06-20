module.exports = function (grunt) {
	grunt.initConfig({
		jsdoc: {
			app: {
				src: [
					'./scripts/*.js',
					'./README.md'
				],
				options: {
					destination: './API Referance'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-jsdoc');
};