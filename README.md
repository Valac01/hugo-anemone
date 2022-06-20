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
