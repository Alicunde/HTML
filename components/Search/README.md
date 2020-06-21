### [Search](components/Search)
#### HTML + CSS

Search type field with optional reset and submit button without using JavaScript.

```
<div class="Search">
    <form method="get" action="#test">
        <input type="input" name="q" required="" placeholder="Search...">
        <p>
            <button type="reset">
                <i class="las la-times"></i>
            </button>
            <button type="submit">
                <i class="las la-search"></i>
            </button>
        </p>
    </form>
</div>
```