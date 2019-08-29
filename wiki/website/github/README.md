# Github

## Github Pages

### Host Vuepress

Set `config.js` file

``` js
base: '/wiki/',
dest: 'docs',
```

Go to github repo setting, at Github Pages choose `master branch / docs folder`

### Set google subdomain with github pages

Create `CNAME` file at `docs` directory with url of github pages

```
libraminh.github.io
```

Or if you're using custom domain

```
wiki.minhle.dev
```

**Github pages**

- Choose `Source` from any branch (`master branch /docs folder` for vuepress)

- Set `Custom domain` you want (`wiki.minhle.dev`)

- Check `Enforce HTTPS`

**Google domain**

At `Custom resource records` set following content

| Name        | Type           | TTL  | Data  |
| ------------- |-------------|-----|-----|
| @     | A | 1h | 185.199.108.153 |
|      |  |  | 185.199.109.153 |
|      |  |  | 185.199.110.153 |
|      |  |  | 185.199.111.153 |
| wiki      | CNAME      |   1h |   libraminh.github.io |

