require("xunit-file");

module.exports = function (grunt) {
    grunt.initConfig({         
        express: {
            test: {
                options: {
                    script: "server.js",
                    port: 3000
                }
            }
        },
        simplemocha: {
            options: {
                globals: ["should"],
                timeout: 3000,
                ignoreLeaks: false,
                ui: "bdd",
                reporter: "xunit-file"
            },
            all: { src: ["./test/*.js"] }
        }
    });
    grunt.loadNpmTasks("grunt-express-server");
    grunt.loadNpmTasks("grunt-simple-mocha");
    grunt.registerTask("default", ["express:test", "simplemocha:all"]);
};
