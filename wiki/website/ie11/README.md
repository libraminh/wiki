# IE11

## Min height Flexbox

wrap element có thuộc tính min-height và set display: flex

``` css
.box-wrap {
  display: flex;

  .box {
    min-height: 50px;
  }
}
```

## Raising keyboard up when enter input field (mobile)
- **Causes:**
<br />
Use absolute/fixed position
<br />
Use display flex for centralized element

- **Solution:** 
<br />
Use display: block