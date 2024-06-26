# Linear Progress

Progress and activity indicators are visual indications of an app loading content.

- Module **@rmwc/linear-progress**
- Import styles:
  - Using CSS Loader
    - import '@rmwc/linear-progress/styles';
  - Or include stylesheets
    - **'@material/linear-progress/dist/mdc.linear-progress.css'**
- MDC Docs: [https://material.io/develop/web/components/linear-progress/](https://material.io/develop/web/components/linear-progress/)

```jsx
<LinearProgress progress={0.5} />
```

```jsx
<LinearProgress progress={0.6} buffer={0.8} />
```

```jsx
<LinearProgress />
```

```jsx
<LinearProgress reversed />
```

## LinearProgress

A component to display linear progress.

### Props

| Name            | Type                                 | Description                                                                              |
| --------------- | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| `buffer`        | `number`                             | A Progress buffer float percentage between 0 and 1.                                      |
| `closed`        | `boolean`                            | Hides the progress bar. Adding / removing this prop will trigger an animation in or out. |
| `foundationRef` | `Ref<MDCLinearProgressFoundation<>>` | Advanced: A reference to the MDCFoundation.                                              |
| `progress`      | `number`                             | Progress float percentage between 0 and 1.                                               |
| `reversed`      | `boolean`                            | Progress goes from right to left.                                                        |
