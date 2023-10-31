# My WebUI

This library consists of a set of reusable UI elements that make it easy to create attractive, functional, and adaptable web applications. It uses modern web technologies and follows community best practices to ensure top-notch quality and ease of maintenance.

## Library motivation

This library is built on top of RadixUI, TailwindCSS and some support from Shadcn/ui

## How to Publish Your Package to the NPM Registry

For developers looking to publish a package to the NPM Registry, you can refer to the [official NPM documentation](https://docs.npmjs.com/cli/v10/using-npm/developers) for essential information on NPM and package development.

When you publish your package to the NPM Registry, it will include only the content specified in the `"files"` configuration within your `package.json` file. Certain important files, such as README and LICENSE, are [implicitly included by default](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#files).

**Pre-Publishing Checklist**

Before publishing your package, it's crucial to follow the guidelines outlined in [NPM's official documentation](https://docs.npmjs.com/cli/v10/using-npm/developers#before-publishing-make-sure-your-package-installs-and-works) to ensure that you're not releasing a broken or unnecessary package.

🤪 Nice-to-Have: [Make sure your package's distribution files exclude any development files](https://docs.npmjs.com/cli/v10/using-npm/developers#testing-whether-your-npmignore-or-files-config-works).

**Publishing Instructions**

- Make sure you installed NodeJS.
- Have NPM Account with `read` and `write` permission to this package.
- Ensure you logged in from NPM CLI with [these command](https://docs.npmjs.com/creating-a-new-npm-user-account): `npm login` then `npm whoami`.

To publish your package to the NPM Registry, simply run the following command: `npm publish --access public`. This command is used for [publishing a scoped public package to the NPM Registry](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages).

## Contributing

If you would like to contribute to My WebUI Library, please follow these steps:

1. Fork the repo
2. Create a new branch (git checkout -b my-new-feature)
3. Make your changes and commit them (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

<a href="mailto:lmint.dev@gmail.com">Let me know</a> if you need any further assistance!
