# Hugo theme Anemone

## Run development

```bash
# cd into example site for dummy pages
cd exampleSite

# Run hugo directing to themes directory
hugo server -D --themesDir ../..
```

## Site config file

You can add or change default site settings in your site config file `config.toml` located in your `website-root` folder if not you can create it yourself. Every configuration settings can be [found here](https://gohugo.io/getting-started/configuration/)

```bash
.
└── config.toml
```

Features

- [Custom Hero section](#custom-hero-section)
- [Latest Section in home page](#latest-section-in-home-page)
- [Code highlight](#code-highlight)

### Custom Hero section

create your own partial called `hero.html`

```bash
.
└── layouts
    └── partials
        └── hero.html
```

Create this page however you'll like and it'll replace the contents from theme in the home page.

### Latest Section in home page

You can show latest 3 pages of any section in your website.
Lets say you have a section called `codes` at `www.example.com/codes` and you'd like to show latest 3 pages from that section in your home page. Then you need to add `params.latest.section` at you site `config` file.

```toml
[[params.latest.section]]
title = "Codes" #title of the section
url = "/codes" #relative path of the section where your list of pages lies
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
