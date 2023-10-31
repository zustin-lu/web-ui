# My WebUI

My WebUI Library is a collection of reusable UI components that can be used to build beautiful, useful & responsive web applications.
Using modern web technologies and follows best practices to ensure high quality and maintainability.

## Library motivation

This library is built on top of RadixUI, TailwindCSS and some support from Shadcn/ui

## How to publish the package to NPM Registry

For developers, you could reference to [this official document](https://docs.npmjs.com/cli/v10/using-npm/developers) from NPM to get some NPM essentials knowledge for develop and publish a package to their registry.

Whenever you publish this package to NPM Registry.
It will including only content inside the `"files"` config inside `package.json`
Some important files such as README, LICENSE, etc... [implicitly included by default](https://docs.npmjs.com/cli/v10/configuring-npm/package-json#files)

**Before publish package**

Please follow [this instruction](https://docs.npmjs.com/cli/v10/using-npm/developers#before-publishing-make-sure-your-package-installs-and-works) from NPM Official Document to make sure you'll not publishing a broken or pointless package.

🤪 Nice to have: [Check the package distribution files is not including our development stuffs before publish](https://docs.npmjs.com/cli/v10/using-npm/developers#testing-whether-your-npmignore-or-files-config-works)

**Publish Instruction**

Run this command `npm publish --access public` to publish to NPM Registry.

👉 [Read official document about publishing scoped public package](https://docs.npmjs.com/creating-and-publishing-scoped-public-packages)

## Contributing

If you would like to contribute to My WebUI Library, please follow these steps:

1. Fork the repo
2. Create a new branch (git checkout -b my-new-feature)
3. Make your changes and commit them (git commit -am 'Add some feature')
4. Push to the branch (git push origin my-new-feature)
5. Create a new Pull Request

<a href="mailto:lmint.dev@gmail.com">Let me know</a> if you need any further assistance!
