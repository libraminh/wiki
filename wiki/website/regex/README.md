# Regular Expression (RegEx)

## Special Characters 

- `g` mean global

- `i` check insensitive
 
- `+` the one or more quantifier

- `\` the escape character

- `[]` the character set

- `[^]` the negate symbol in a character set (exclude something)

- `?` expect only one character stand before `?` will be an optional

- `*` expect one or unlimited character before `*` symbol

- `.` except one more character (`car.` will be `card` or `cars` or `car@` as long as it be 4 characters)


## Charecter Sets

### `[abc]` Matches either an a, b or c character

``` {2}
/[abc]+/g
a bb ccc
```

### `[^abc]` Matches any character except for an a, b or c

``` {2}
/[^abc]+/g
Anything but abc.
```

### `[a-z]` Matches any characters between a and z, including a and z.

``` {2}
/[a-z]+/g
Only a-z
```

## Repeating Characters

### `[0-9]+` Matches between one and unlimited times

``` 
/[0-9]+/g
```

### `[0-9]{11}` Matches 11 times

``` 
/[0-9]{11}/g
Only 11 digits: 01234567899
```

### `[0-9]{5,8}` Matches between 5 to 8

``` 
/[0-9]{5,8}/g
```

### `[0-9]{5,}` Matches between 5 to unlimited

``` 
/[0-9]{5,}/g
```

## Metacharacters

- `\d` match any digit `[0-9]`

- `\s` match any `space` or `tab`

- `\w` match any word `[0-9a-zA-z_]`

- `\t` match a tab only

## Starting & Ending Patterns

### `^` or `$` to declare Start and End pattern

```
^[a-z]{5}
or
[a-z]{5}$
```

## Alternate Characters

### `|` means OR (like `||` in javascript)

```
p|t

(pet|toy) rabbit
```

## Example

``` html
<form>
  <input type="text" name="username" placeholder="username">
  <p>Username must be  and contain 5 - 12 characters</p>

  <input type="text" name="email" placeholder="email">
  <p>Email must be a valid address, e.g. me@mydomain.com</p>

  <input type="password" name="password" placeholder="password">
  <p>Password must alphanumeric (@, _ and - are also allowed) and be 8 - 20 characters</p>

  <input type="text" name="telephone" placeholder="telephone">
  <p>Telephone must be a valid UK telephone number (11 digits)</p>

  <input type="text" name="slug" placeholder="profile slug">
  <p>Slug must contain only lowercase letters, numbers and hyphens and be 8 - 20 characters</p>

</form>
```

``` js
const inputs = document.querySelectorAll('input');

// regex patterns
const patterns = {
        telephone: /^\d{11}$/,
        username: /^[a-z\d]{5,12}$/i,
        password: /^[\d\w@-]{8,20}$/i,
        slug: /^[a-z\d-]{8,20}$/,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        // yourname@domain.com(.uk)
};

// validation function
function validate(field, regex){
  if(regex.test(field.value)){
      field.className = 'valid';
  } else {
      field.className = 'invalid';
  }
}

// attach keyup events to inputs
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    // console.log(patterns[e.target.attributes.name.value]);
    validate(e.target, patterns[e.target.attributes.name.value]);
  });
});
```