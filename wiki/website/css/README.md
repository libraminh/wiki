# CSS

## Force content into one line

``` css
.text--oneline {
  text-overflow: ellipsis; 
  overflow: hidden; 
  white-space: nowrap;
}

/* Lorem ipsum... */
```

## Reset css for button, input submit Safari Iphone

``` css
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
```

## Raising keyboard up when enter input field (mobile)
- **Causes:**
<br />
Use **absolute/fixed position**
<br />
Use **display flex** for centralized element

- **Solution:** 
<br />
Use `display: block`

## Center element inside 

### Set line height equal to height

``` html
<a href="#">
  <i class="icon ion-social-facebook"></i>
</a>
```

``` css 
a {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
}
```

## How to deal with last item when using `justify-content: space-between`

__Use `.filling-empty-space-childs` to solve this problem__

``` html
<div class="wrap-box">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>

  <div class="filling-empty-space-childs"></div>
  <div class="filling-empty-space-childs"></div>
  <div class="filling-empty-space-childs"></div>
</div>
```

``` css
.wrap-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.box {
  background: pink;
  width: calc(100% / 3 - 10px);
  height: 300px;
  margin-bottom: 15px;
}

.filling-empty-space-childs {
  width: calc(100% / 3 - 10px); /*the width of the images in this example*/
  height:0; /*Important! for the divs to collapse should they fall in a new row*/
}
```

Demo: [https://codesandbox.io/s/static-oksuf](https://codesandbox.io/s/static-oksuf)