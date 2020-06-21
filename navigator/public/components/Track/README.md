### [Track](components/Track)
#### HTML + CSS

Component similar to Range but showing a progress bar. We make use of the shadow of the thumb, giving enough play and making possible many design options. The use of Firefox progress has been avoided, due to errors regarding the size of the Thumb.

```
<div class="Track">
    <input type="range" min="0" max="1000" step="1" value="500">
</div>
```