### [Rating](components/Rating)
#### HTML + CSS

Field to define a valuation. It does not use JavaScript and the stars are Unicode. The component is built on radio type fields.

```
<div class="Rating">
    <b>Rating the App</b>
    <label for="rating-1">★</label>
    <input type="radio" id="rating-1" name="rating" value="1">
    <label for="rating-2">★</label>
    <input type="radio" id="rating-2" name="rating" value="2">
    <label for="rating-3">★</label>
    <input type="radio" id="rating-3" name="rating" value="3" checked="">
    <label for="rating-4">★</label>
    <input type="radio" id="rating-4" name="rating" value="4">
    <label for="rating-5">★</label>
    <input type="radio" id="rating-5" name="rating" value="5">
    <span></span>
</div>
```