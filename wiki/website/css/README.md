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