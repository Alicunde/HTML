### [Grid](components/Grid)
#### HTML + CSS (not valid, sorry)

We hate grids frameworks. The concept is the concept. The current situation of different screens requires clear and easy solutions to implement. Most of the existing grids on the market focus on combining classes, generating objects with multiple classes. Our strip focuses on the biggest problem of strips, their combination. Initially we developed a rule with thousands of classes, combined in 10 levels and allowing its application by the order of the classes, basically we used the selector ^ =. Unfortunately the result was a CSS that took up 300kb, which is unfeasible. For this reason, we have created a grid based on the attributes **screen**, **desk**, **book**, **tablet** and **phone**. By simply adding the **phone = "five"** attribute, we will have a box with 50% width on screens smaller than 480px. If we put **desktop = "five"** it will be 50% on desktop.

```
<div class="Grid">
    <div screen="100" book="80" desk="60" tablet="40" phone="20" ></div>
</div>
```