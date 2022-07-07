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
- [Post Covers](#post-covers)
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

### Post Covers

Your articles can have cover images which will be displayed in the articles, articles list as a thumbnail and in cards.

In your front matter of the article add a `cover` property.

All your cover images should be **inside** the `static` folder

```markdown
title: "Lorem ipsum dolor sit amet."
cover: "/covers/cover-image.jpg"
```

The theme will resize your cover image into smaller sizes to be used in the thumbnail only if you mount your cover images directory into the `assets` directory. Otherwise the thumbnail will use the full size images.

To mount the directories add `module.mount` property as shown in [Hugo docs](https://gohugo.io/hugo-modules/configuration/#module-config-mounts)

```toml
[[module.mounts]]
  source = "static/covers" # Your cover image directory in static folder
  target = "assets/covers"
```

Keep in mind resizing will increase the build times, but hugo caches the processed images in `resources` folder, [Hugo docs](https://gohugo.io/content-management/image-processing/#image-processing-performance-consideration). Which you can use to your advantage as a cache between builds in CI/CD environment.

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
