# Studio icons BETA

Animated icons for Home Assistant. This is a BETA version.
I animated some icons, more will follow.
Looking for animators to help with the project.

⚠️ Af of july I noticed a jitter in the animation. I do not have time to fix this, so the project is suspended. When you have time for a collaboration, let me know. ⚠️

#### Studio icons state

In the default icon picker, start the search with 'sis:'. 
State icons, animate when the state is on, or when you hover over the icon.

![Preview](https://github.com/studioIngrid/studio-icons_beta/blob/main/docs/studio-icons-sis.gif)

#### Studio icons loop

In the default icon picker, start the search with 'sil:'. 
Loop icons animate continuously.

![Preview](https://github.com/studioIngrid/studio-icons_beta/blob/main/docs/studio-icons-sil.gif)

## To install
Download the `/src/studio-icons_beta.js` file and place it in the `config/www` folder in you Home Assistant installation.
Then add to `configuration.yaml`:

```
frontend:
  extra_module_url:
    - /local/studio-icons_beta.js
```

Restart Home Assistant.
