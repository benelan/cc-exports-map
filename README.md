# Calcite Components exports map

Looking into adding an [exports map](https://nodejs.org/api/packages.html#package-entry-points).


## Repro Steps

1. Run `npm install && npm run dev`
2. Open the browser and go to [http://localhost:5173/calcite](http://localhost:5173/calcite)
3. In the console you will see the same error as [this issue](https://github.com/Esri/calcite-components/issues/5077)
4. Type `<CTRL> C`
5. Run `npm run build:cc && npm run link && npm run dev`
6. Open the browser again to the same url
7. Notice a different error

--


# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
