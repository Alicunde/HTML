### [List](components/List) | [Demo](http://html.systems/List) 
#### HTML + CSS

Nested list with a very useful schematic design for administrations. It has an alternative design for printing and responsive capabilities. Its CSS applies styles through inheritance, allowing embedding alternative content without fear of design problems.

```
<div class="List">
    <ul>
        <li>
            <a href="/example">
                <strong>My link</strong>
            </a>
            <div class="List">
                <ul>
                    <li>
                        <p>
                            <strong>My text</strong>
                        </p>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</div>
```
