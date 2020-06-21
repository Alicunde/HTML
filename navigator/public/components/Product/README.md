### [Product](components/Product)
#### HTML + CSS

Component to display a product using semantic HTML and without the use of JavaScript. It has responsive capabilities. This component is ideal to be customized.

```
<div class="Product">
    <ol>
        <li>
            <input type="radio" checked="" name="picture" id="product-1">
            <img alt="Test" src="/example.jpg">
        </li>
    </ol>
    <ul>
        <li>
            <label for="product-1">
                <img alt="Test" src="/example.jpg">
            </label>
        </li>
    </ul>
    <div>
        <h3>Calvin Klein</h3>
        <h1>Gray Shirt</h1>
        <h2>High quality cotton</h2>
        <em>
            <del>200.00</del> 160.00€
        </em>
        <strong>20</strong>
        <p>Vivamus consequat nisl diam. Vestibulum porttitor tempor neque vitae condimentum. </p>
        <form>
            <select>
                <option>L</option>
            </select>
            <input type="submit">
        </form>
    </div>
</div>
```