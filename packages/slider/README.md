# Sliders

Sliders let users select from a range of values by moving the slider thumb.

- Module **@rmwc/slider**
- Import styles:
  - Using CSS Loader
    - import '@rmwc/slider/styles';
  - Or include stylesheets
    - **'@material/slider/dist/mdc.slider.css'**
- MDC Docs: [https://material.io/develop/web/components/input-controls/sliders/](https://material.io/develop/web/components/input-controls/sliders/)

Sliders can be both uncontrolled and controlled. When creating a controlled `Slider`, you should be listening to the `onInput` event and use `evt.detail.value` to set your new value.

Sliders will automatically layout themselves on window resize. If you need to manually trigger a layout because the sliders container size changed, the simplest way is to trigger a resize event `window.dispatchEvent(new Event('resize'));`.

**Known Issue** `material-components-web` uses pointer events internally. If you are using something below React 16.4, you will see unknown attribute errors, however the slider should still work.

```jsx
<Slider
  onInput={(evt) => console.log(evt)}
  onChange={(evt) => console.log(evt)}
/>
```

```jsx
function Example() {
  const [value, setValue] = React.useState(50);
  // onInput is required and will fire continuously.
  // onChange is optional and fires at the end of the interaction
  return (
    <Slider
      value={value}
      onChange={(evt) => setValue(evt.detail.value)}
      onInput={(evt) => setValue(evt.detail.value)}
      discrete
      step={10}
    />
  );
}
```

```jsx
<Slider discrete min={0} max={200} step={10} />
```

```jsx
<Slider discrete displayMarkers step={10} />
```

```jsx
function Example() {
  const [value, setValue] = React.useState(80);
  const [startValue, setStartValue] = React.useState(20);
  return (
    <Slider
      range
      discrete
      valueStart={startValue}
      value={value}
      onChange={(evt) => setValue(evt.detail.value)}
      onChangeValueStart={(evt) => setStartValue(evt.detail.value)}
    ></Slider>
  );
}
```

## Slider

A Slider component.

### Props

| Name                 | Type                                  | Description                                                                                                                                                               |
| -------------------- | ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `disabled`           | `boolean`                             | Disables the control.                                                                                                                                                     |
| `discrete`           | `boolean`                             | Displays the exact value of the Slider on the knob.                                                                                                                       |
| `displayMarkers`     | `boolean`                             | Displays the individual step markers on the Slider track.                                                                                                                 |
| `foundationRef`      | `Ref<MDCSliderFoundation<>>`          | Advanced: A reference to the MDCFoundation.                                                                                                                               |
| `max`                | `string \| number`                    | The maximum value of the Slider.                                                                                                                                          |
| `min`                | `string \| number`                    | The minimum value of the Slider.                                                                                                                                          |
| `minRange`           | `string \| number`                    | The minimum gap between two thumbs for range sliders.                                                                                                                     |
| `onChange`           | `(evt: SliderOnChangeEventT) => void` | A callback that fires when the Slider stops sliding which takes an event with event.detail.value set to the Slider's value. evt.detail = { value: number;}                |
| `onChangeValueStart` | `(evt: SliderOnChangeEventT) => void` | A callback that fires when the Slider stops sliding which takes an event with event.detail.value set to the Slider's valueStart. evt.detail = { value: number;}           |
| `onInput`            | `(evt: SliderOnInputEventT) => void`  | A callback that fires continuously while the Slider is sliding that takes an event with event.detail.value set to the Slider's value. evt.detail = { value: number;}      |
| `onInputValueStart`  | `(evt: SliderOnInputEventT) => void`  | A callback that fires continuously while the Slider is sliding that takes an event with event.detail.value set to the Slider's valueStart. evt.detail = { value: number;} |
| `range`              | `boolean`                             | Makes the slider a range slider.                                                                                                                                          |
| `step`               | `string \| number`                    | A step to quantize values by.                                                                                                                                             |
| `value`              | `string \| number`                    | The value of the Slider. When Slider is of type range, value becomes the end value.                                                                                       |
| `valueStart`         | `number`                              | The start value of the Slider range.                                                                                                                                      |
