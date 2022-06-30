# Hugo theme Anemone

## Run development

```bash
# cd into example site for dummy pages
cd exampleSite

# Run hugo directing to themes directory
hugo server -D --themesDir ../..
```

Features

- Custom Hero section

## Custom Hero section

create your own partial called `hero.html`

```bash
.
└── layouts
    └── partials
        └── hero.html
```

Create this page however you'll like and it'll replace the contents from theme in the home page.

## Site config file

You can add or change default site settings in your site config file `config.toml` located in your `website-root` folder if not you can create it yourself. Every configuration settings can be [found here](https://gohugo.io/getting-started/configuration/)

```bash
.
└── config.toml
```

### Code highlight

Theme is already shipped with `base16-snazzy` [chroma](https://github.com/alecthomas/chroma) style, in css.
If you want to use a different [chroma](https://github.com/alecthomas/chroma) styles, then edit your `config` file.

```toml
[markup.highlight]
noClasses = true
style = "name of style"
```

With `noClasses = true` you could even change styles per code blocks

````markdown
```js {style="colorful"}
...code
```
````

---

Or using `highlight` partial

```markdown
{{<highlight js "style=colorful">}}
...code
{{</highlight>}}
```
