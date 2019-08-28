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

__On IE__

``` css
select::-ms-expand {
  display: none;
}
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

__Use `fill-empty` class to solve this problem__

``` html
<div class="wrap-box">
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>
  <div class="box"></div>

  <!-- 4 `fill-empty` boxs = (6 - 2) -->
  <div class="fill-empty"></div>
  <div class="fill-empty"></div>
  <div class="fill-empty"></div>
  <div class="fill-empty"></div>
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
  width: calc(100% / 6 - 10px);
  height: 300px;
  margin-bottom: 15px;
}

.fill-empty {
  width: calc(100% / 6 - 10px);
  height: 0;
}
```

Demo: [https://codesandbox.io/s/css-flexbox-trick-justify-content-space-between-obzoz](https://codesandbox.io/s/css-flexbox-trick-justify-content-space-between-obzoz)


## Placeholder css

``` css
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: pink;
  opacity: 1; /* prefix for firefox */
}
::-moz-placeholder { /* Firefox 19+ */
  color: pink;
  opacity: 1; /* prefix for firefox */
}
:-ms-input-placeholder { /* IE 10+ */
  color: pink;
  opacity: 1; /* prefix for firefox */
}
:-moz-placeholder { /* Firefox 18- */
  color: pink;
  opacity: 1; /* prefix for firefox */
}
```