# Studio icons

> ![CAUTION]
> This is a BETA version. Icons can unexpectitatly not work.

> [!TIP]
> If you have any questions or feedback, find me on the Home assistant community: [studioIngrid](https://community.home-assistant.io/u/studioingrid).
> Or reply in the [thread](https://community.home-assistant.io/t/bringing-lottie-animations-to-home-assistant). \
> If you like this project, please remember to give this repo a star⭐.

I animated some icons, more will follow.
Looking for animators to help with the project.

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

# Development workflow

Always start and end with the mdi vector.
Create the animations in After Effects.
Use classes: background, inline and outline for styling.

A short animation lasts for 2 seconds the long ones are 4 seconds.
Export as lottie json using the bodymovin plugin.

Keep the same name as the mdi icon, to make default to mdi possible.
