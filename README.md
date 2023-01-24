# Cascade Select (HTMLElement)

This library contains a custom HTML element called cascade select. It allows the user to create a cascade select where the options in the second select element change based on the selected option in the first select element.

View live demo [here.](https://3l4x.github.io/cascade-select-HTMLElement/)

## Getting started

 1. Include the index.js file in your HTML file
 2. Use the ```<cascade-select>``` tag in your HTML file, and nest ```<optgroup>``` tags with ```<option>``` tags inside.
``` javascript
    <cascade-select>
        <select>
            <optgroup label="4-legged pets">
                <option value="hamster">Hamster</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
            </optgroup>
            <optgroup label="Flying pets">
                <option value="parrot">Parrot</option>
                <option value="macaw">Macaw</option>
                <option value="albatross">Albatross</option>
            </optgroup>
        </select>
    </cascade-select>
```

## Customization
You can customize <cascade-select> element by applying CSS styles to the select elements.


## Browser support
This component uses Web Components API, which is currently supported in all of the modern browsers. It might not work on older ones.

## Note
- The index.html file is an example of how the component is used. It isn't needed to use cascade-select.

- This project is built using custom elements. If you are looking for the non-custom element version you can check it out [here.](https://github.com/3l4x/cascade-select)
