### [Accordion](components/Accordion)
#### HTML + CSS, no icons, no JavaScript

The CSS has all the definitions with selectors of type ">", allowing to add inside the accordions without fear of inheritance problems. We have added CSS3 animations, although they are not necessary. We have avoided using animations on min-height, due to known problems.

```
<div class="Accordion">
    <ul>
        <li>
            <input type="checkbox" id="1">
            <label for="1">One</label>
            <div>
                Content
            </div>
        </li>
        <li>
            <input type="checkbox" id="2">
            <label for="2">Two</label>
            <div>
                Content
            </div>
        </li>
    </ul>
</div>
```