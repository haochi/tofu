Tofu is a logic-less, tweet-size (minified) JavaScript templating engine similar to [mustache.js](https://github.com/janl/mustache.js), except that tofu is true logic-less.

## Usage
Tofu takes two parameters: a string as template, and a object as values. Variables inside the template are surrounded by a pair of curly braces.

`tofu("{ Ich } am { ein } Berliner", { Ich: "I", ein: "a" });` will return `I am a Berliner`.

You can access nested object values through the familar dot notation that JavaScript uses, so you can do something like

    tofu("Welcome to { place.name }! The current temperature is { place.temperature.magnitude } degrees { place.temperature.unit }.", { 
      place: {
        name: "Hong Kong",
        temperature: {
          magnitude: 20,
          unit : "Celcius"
        }
      }
    });

and it will return `Welcome to Hong Kong! The current temperature is 20 degrees Celcius.`

## Gotchas
There aren't really any gotchas, but I will just put it here.

1. I have made the key names for the values object is very forgiving, so you can write something like `tofu("{ *** }", { "***": "Hello, World!"})`. It should be able to accept any string (including symbols and non-Latin characters) as long as it doesn't include spaces or the closing curly brace (i.e. `}`). The reasoning is pretty obvious so I am not going to state it here. You can look at the source code for the exact regular expression. My empirical research shows that you won't have to worry about it 99.9999999% of the time. As a general rule of thumb, pretend like you are accessing a JavaScript object using dot notation and you should be fine.

## Why should you use Tofu?
Tofu is fast, tiny, and gets the job done if you don't need the fancy conditional and enumerable sections that mustache offers.
