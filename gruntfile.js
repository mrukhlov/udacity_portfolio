module.exports = function (grunt) {
	
	grunt.initConfig({
		responsive_images: {
			dev: {
				options: {
					// engine: 'im',
					sizes: [{
						width: 400,
						suffix: '_mobile',
						quality: 50
					},{
					// engine: 'im',
						width: 800,
						suffix: '_tablet',
						quality: 50
					},{
					// engine: 'im',
						width: 900,
						suffix: '_large',
						quality: 50
					}]
				},
				files: [{
					expand: true,
					src: ['*.{gif,jpg,png}'],
					cwd: 'img_src/',
					dest: 'img/'
				}]
			}
		},
	});
	
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.registerTask('default', ['responsive_images']);
	
};
