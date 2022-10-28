# Svelte + TS + Vite

This template should help get you started developing with Svelte and TypeScript in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.
  `vite dev` and `vite build` wouldn't work in a SvelteKit environment, for example.

This template contains as little as possible to get started with Vite + TypeScript + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `allowJs` in the TS template?**

While `allowJs: false` would indeed prevent the use of `.js` files in the project, it does not prevent the use of JavaScript syntax in `.svelte` files. In addition, it would force `checkJs: false`, bringing the worst of both worlds: not being able to guarantee the entire codebase is TypeScript, and also having worse typechecking for the existing JavaScript. In addition, there are valid use cases in which a mixed codebase may be relevant.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/rixo/svelte-hmr#svelte-hmr).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```ts
// store.ts
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
# ecl-eui-svelte

## components

|Component              |todo |planed |working |testing |done |
| ---                   | --- | ---   | ---    | ---    | --- |
| EuiAlert              | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| EuiAutocomplete       | :black_circle: | :white_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiBadge              | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| EuiBlockContent       | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| EuiBlockDocument      | :black_circle: | :white_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiButton             | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| EuiButtonGroup        | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| EuiInputButtonGroup   | :black_circle: | :red_circle:   | :white_circle: | :white_circle: | :white_circle: |
| EuiCard               | :black_circle: | :red_circle:   | :white_circle: | :white_circle: | :white_circle: |
| EuiChip               | :black_circle: | :red_circle:   | :white_circle: | :white_circle: | :white_circle: |
| EuiChipList           | :black_circle: | :red_circle:   | :white_circle: | :white_circle: | :white_circle: |
| EuiDatepicker         | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiDateRangeSelector  | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiDashboardButton    | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiDashboardCard      | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiDialog             | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiDisableContent     | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiDiscussionThread   | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiDropdown           | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiDropdownButtonMenu | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiFeedbackMessage    | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiFileUpload         | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiFieldset           | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiGrowl              | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiIcon               | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiIconSvg            | :green_circle: | :green_circle: | :green_circle: | :green_circle: | :green_circle: |
| EuiIconToggle         | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiLabel              | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiList               | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiMessageBox         | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiPaginator          | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiPopover            | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiProgressCircle     | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiSlideToggle        | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiTabs               | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiTable              | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiTimebar            | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiTimeline           | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiTimepicker         | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiWizard             | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiInputNumber        | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiInputCheckbox      | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiInputRadio         | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiInputText          | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiSelect             | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiTextarea           | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiInputGroup         | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiDropdownButton     | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiSplitButton        | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiTooltip            | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiMaxLength          | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiPage               | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiPageHeader         | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiPageColumns        | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiBreadcrumb         | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |
| EuiSidebarMenu        | :black_circle: | :black_circle: | :white_circle: | :white_circle: | :white_circle: |

## predefined layouts