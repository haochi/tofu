Tofu is a logic-less, tweet-size (minified) JavaScript templating engine similar to [mustache.js](https://github.com/janl/mustache.js), except that tofu is true logic-less.

## Usage
Tofu takes two parameters: a string as template, and a object as values. Variables inside the template are surrounded by a pair of curly braces.

`tofu("{ Ich } am { ein } Berliner", { Ich: "I", ein: "a" });` will return `I am a Berliner`.

You can use access nested object values through the similar dot notation that JavaScript uses, so you can do something like

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

## Why should you use Tofu?
Tofu is fast, tiny, and gets the job done if you don't need the fancy conditional and enumerable sectiosn that mustache offers.
