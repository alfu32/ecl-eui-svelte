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
| EuiAlert              | &check; | &check;   | &check;    | &check;    | &check; |
| EuiAutocomplete       | &check; | &cross;           | &cross;            | &cross;            | &cross;         |
| EuiBadge              | &check; | &check;   | &check;    | &check;    | &check; |
| EuiBlockContent       | &check; | &check;   | &check;    | &check;    | &check; |
| EuiBlockDocument      | &check; | &cross;           | &cross;            | &cross;            | &cross;         |
| EuiButton             | &check; | &check;   | &check;    | &check;    | &check; |
| EuiButtonGroup        | &check; | &check;   | &check;    | &check;    | &check; |
| EuiCard               | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiChip               | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiChipList           | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiDatepicker         | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiDateRangeSelector  | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiDashboardButton    | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiDashboardCard      | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiDialog             | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiDisableContent     | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiDiscussionThread   | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiDropdown           | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiDropdownButtonMenu | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiFeedbackMessage    | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiFileUpload         | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiFieldset           | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiGrowl              | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiIcon               | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiIconSvg            | &check; | &check;   | &check;    | &check;    | &check; |
| EuiIconToggle         | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiLabel              | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiList               | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiMessageBox         | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiPaginator          | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiPopover            | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiProgressCircle     | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiSlideToggle        | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiTabs               | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiTable              | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiTimebar            | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiTimeline           | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiTimepicker         | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiWizard             | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiInputNumber        | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiInputCheckbox      | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiInputRadio         | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiInputText          | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiSelect             | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiTextarea           | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiInputGroup         | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiDropdownButton     | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiSplitButton        | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiTooltip            | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiMaxLength          | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiPage               | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiPageHeader         | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiPageColumns        | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiBreadcrumb         | &check; | &check;   | &cross;            | &cross;            | &cross;         |
| EuiSidebarMenu        | &check; | &check;   | &cross;            | &cross;            | &cross;         |

## predefined layouts