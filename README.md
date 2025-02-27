<!-- Please do not edit this file. Edit the `blah` field in the `package.json` instead. If in doubt, open an issue. -->


















# arr-obj

 [![Support me on Patreon][badge_patreon]][patreon] [![Buy me a book][badge_amazon]][amazon] [![PayPal][badge_paypal_donate]][paypal-donations] [![Ask me anything](https://img.shields.io/badge/ask%20me-anything-1abc9c.svg)](https://github.com/IonicaBizau/ama) [![Version](https://img.shields.io/npm/v/arr-obj.svg)](https://www.npmjs.com/package/arr-obj) [![Downloads](https://img.shields.io/npm/dt/arr-obj.svg)](https://www.npmjs.com/package/arr-obj) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/@johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

<a href="https://www.buymeacoffee.com/H96WwChMy" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/yellow_img.png" alt="Buy Me A Coffee"></a>







> Convert arrays into objects by using unique fields.

















## :cloud: Installation

```sh
# Using npm
npm install --save arr-obj

# Using yarn
yarn add arr-obj
```













## :clipboard: Example



```js
const arrObj = require("arr-obj");

let arr = [
    { name: "Alice", location: { name: "Earth" } },
    { name: "Bob", location: { name: "Mars" } }
];

console.log(arrObj(arr, "name"));
// { Alice: { name: 'Alice', location: { name: 'Earth' } },
//   Bob: { name: 'Bob', location: { name: 'Mars' } } }

console.log(arrObj(arr, "location.name", true));
// { Earth: { name: 'Alice', location: { name: 'Earth' } },
//   Mars: { name: 'Bob', location: { name: 'Mars' } } }

console.log(arrObj([1, 4, 9, 16], c => {
    return Math.sqrt(c);
}));
// { '1': 1, '2': 4, '3': 9, '4': 16 }
```












## :question: Get Help

There are few ways to get help:



 1. Please [post questions on Stack Overflow](https://stackoverflow.com/questions/ask). You can open issues with questions, as long you add a link to your Stack Overflow question.
 2. For bug reports and feature requests, open issues. :bug:
 3. For direct and quick help, you can [use Codementor](https://www.codementor.io/johnnyb). :rocket:







## :memo: Documentation


### `arrObj(arr, by, deep)`
Convert an array into object by using unique fields.

#### Params

- **Array** `arr`: The input array.
- **String|Function** `by`: The field name to use in the object keys or a function returning this value.
- **Boolean** `deep`: Use this for accessing nested objects in the array elements.

#### Return
- **Object** The result object.














## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].


## :sparkling_heart: Support my projects
I open-source almost everything I can, and I try to reply to everyone needing help using these projects. Obviously,
this takes time. You can integrate and use these projects in your applications *for free*! You can even change the source code and redistribute (even resell it).

However, if you get some profit from this or just want to encourage me to continue creating stuff, there are few ways you can do it:


 - Starring and sharing the projects you like :rocket:
 - [![Buy me a book][badge_amazon]][amazon]—I love books! I will remember you after years if you buy me one. :grin: :book:
 - [![PayPal][badge_paypal]][paypal-donations]—You can make one-time donations via PayPal. I'll probably buy a ~~coffee~~ tea. :tea:
 - [![Support me on Patreon][badge_patreon]][patreon]—Set up a recurring monthly donation and you will get interesting news about what I'm doing (things that I don't share with everyone).
 - **Bitcoin**—You can send me bitcoins at this address (or scanning the code below): `1P9BRsmazNQcuyTxEqveUsnf5CERdq35V6`

    ![](https://i.imgur.com/z6OQI95.png)


Thanks! :heart:
























## :scroll: License

[MIT][license] © [Ionică Bizău][website]






[license]: /LICENSE
[website]: https://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
[badge_patreon]: https://ionicabizau.github.io/badges/patreon.svg
[badge_amazon]: https://ionicabizau.github.io/badges/amazon.svg
[badge_paypal]: https://ionicabizau.github.io/badges/paypal.svg
[badge_paypal_donate]: https://ionicabizau.github.io/badges/paypal_donate.svg
[patreon]: https://www.patreon.com/ionicabizau
[amazon]: http://amzn.eu/hRo9sIZ
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
