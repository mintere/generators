"use strict";
const Generator = require("yeoman-generator");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    this.log(yosay(`Welcome to Mintere Sites`));

    // const prompts = [
    //   {
    //     type: "confirm",
    //     name: "someAnswer",
    //     message: "Would you like to enable this option?",
    //     default: true
    //   }
    // ];

    // return this.prompt(prompts).then(props => {
    //   // To access props later use this.props.someAnswer;
    //   this.props = props;
    // });
  }

  writing() {
    this.fs.copy(
      this.templatePath("blocks/cta.hbs"),
      this.destinationPath("theme/blocks/cta.hbs")
    );
    this.fs.copy(
      this.templatePath("assets/base.css"),
      this.destinationPath("theme/assets/base.css")
    );
    this.fs.copy(
      this.templatePath("partials/layout.hbs"),
      this.destinationPath("theme/partials/layout.hbs")
    );
    this.fs.copy(
      this.templatePath("templates/basic-page.hbs"),
      this.destinationPath("theme/templates/basic-page.hbs")
    );
    this.fs.copy(
      this.templatePath("mocks/index.json"),
      this.destinationPath("mocks/index.json")
    );
  }

  install() {
    console.log(
      "\nYou're ready to get started! To preview your site, run:\n\n $ npx mintere sites:local"
    );
  }
};
