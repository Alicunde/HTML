### [Dropdown](components/Dropdown)
#### HTML + CSS

A Dropdown is a dropdown object with different fields inside it. They generally stick to selectors with different options and with the possibility of adding links inside as a list. I have included the option to have fields of type text with optional labels.

It is attractive to know that it does not offer duplication of fields, creating a clean and not convoluted HTML.


```
<div class="Dropdown">
    <input type="checkbox" id="pet" />
    <label for="pet">You have a pet?</label>
    <ul>
        <li>
            <input type="radio" id="dog" name="pet" value="dog" />
            <label data-title="Yes, I have a dog" for="dog"> Dog</label>
        </li>
    </ul>
</div>
```