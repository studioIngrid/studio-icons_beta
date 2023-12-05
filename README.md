# Studio icons BETA

Animated icons for Home Assistant. This is a BETA version.
I animated some icons, more will follow. 
Looking for animators to help with the project.

#### Studio icons state

In the default icon picker, start the search with 'sis:'. 
State icons, animate when the state is on, or when you hover over the icon.

#### Studio icons loop

In the default icon picker, start the search with 'sil:'. 
Loop icons animate continuously.

## To install
Download the /src/studio-icons_beta.js file and place it in the config/www folder in you homeassistant installation.
Then add to `configuration.yaml`:

`frontend:
  extra_module_url:
    - /local/studio-icons_beta.js`

Restart Home Assistant.