#!/usr/bin/env node

import { program } from "commander";
import { prompt } from "inquirer";
import open from "open";
import packageJSON from "./package.json";

program
  .name(packageJSON.name)
  .version(packageJSON.version)
  .description(packageJSON.description)
  .action(async () => {
    console.log("Hi there 👋 My name is Yaman KATBY");
    console.log(
      "Currently working with the great team 🐝 @invertase shipping the feature of 🔥 Firebase extensions project."
    );
    console.log("");

    const stackoverflow = "💬 StackOverflow";
    const linkedin = "🔗 LinkedIn";
    const twitter = "🐦 Twitter";

    const { choice } = await prompt({
      type: "list",
      name: "choice",
      message: "Find me in the browser",
      choices: [stackoverflow, linkedin, twitter],
    });

    switch (choice) {
      case stackoverflow:
        await open("https://stackoverflow.com/users/10278150/yaman-katby");
        break;
      case linkedin:
        await open("https://www.linkedin.com/in/yamankatby");
        break;
      case twitter:
        await open("https://twitter.com/yamankatby");
        break;
    }
  })
  .parse(process.argv);
