# Snackbars

Snackbars provide brief feedback about an operation through a message at the bottom of the screen.

- Module **@rmwc/snackbar**
- Import styles:
  - Using CSS Loader
    - import '@rmwc/snackbar/styles';
  - Or include stylesheets
    - **'@material/snackbar/dist/mdc.snackbar.css'**
    - **'@material/button/dist/mdc.button.css'**
    - **'@material/ripple/dist/mdc.ripple.css'**
- MDC Docs: [https://material.io/develop/web/components/snackbars/](https://material.io/develop/web/components/snackbars/)

## Basic Usage

You can render a snackbar in your UI and control its open state.

```jsx
function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Snackbar
        open={open}
        onClose={(evt) => setOpen(false)}
        message="This is a new message"
        dismissesOnAction
        action={
          <SnackbarAction
            label="Dismiss"
            onClick={() => console.log('Click Me')}
          />
        }
      />

      <Button raised label="Show snackbar" onClick={(evt) => setOpen(!open)} />
    </>
  );
}
```

```jsx
function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Snackbar
        open={open}
        onClose={(evt) => setOpen(false)}
        message="Start aligned, open until dismissed"
        stacked
        dismissesOnAction
        action={[
          <SnackbarAction label="Yeah!" />,
          <SnackbarAction label="No..." />
        ]}
        leading
        timeout={-1}
      />

      <Button
        raised
        label="Show start-aligned"
        onClick={(evt) => setOpen(!open)}
      />
    </>
  );
}
```

```jsx
function Example() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Snackbar
        open={open}
        onClose={(evt) => setOpen(false)}
        message="This is a new message"
        dismissesOnAction
        dismissIcon="close"
        timeout={-1}
      />
      <Button raised label="Show snackbar" onClick={(evt) => setOpen(!open)} />
    </>
  );
}
```

## Usage with SnackbarQueue

While rendering the Snackbar inline works for simple cases, you'll likely have a notification system, or want to send notifications from anywhere in your app. The `SnackbarQueue` exists as a convenient interface for handling these cases and rendering the snackbar messages for you. If you've used the `DialogQueue`, the `SnackbarQueue` is very similar.

Setup is nice and easy, create a queue object you can pass around in your code base, pass the queues `messages` to the `SnackbarQueue` component, and then use the `notify` function to send notifications.

```jsx

  `
// Create a file that exports your queue
// myQueue.js
import { createSnackbarQueue } from '@rmwc/snackbar';

export const queue = createSnackbarQueue();


```

```jsx

  `
// Somewhere at the top level of your app
// Render the SnackbarQueue
import React from 'react';
import { queue } from './myQueue';

export default function App() {
  return (
    <div>
      ...
      <SnackbarQueue
        messages={queue.messages}
        // You can also pass default options to pass to your notifications
        // ie, make them all leading, stacked, etc
        leading
        stacked
      />
    </div>
  )
}



```

The `notify` function was designed to mimic the the built-in browser Notifications api and can accept most of the relevant options (icon, image, title, body, actions, ,etc). It also can accept any of the Snackbar props. Just import your queue, and call the notify method.

```jsx

  `
// Somewhere else in your app
// Could be a view, your redux store, anywhere you want...
import { queue } from './myQueue';

// Simple example
queue.notify({
  title: 'Hi there'
});

// With some features
queue.notify({
  title: <b>Warning</b>,
  body: 'You have selected pizza instead icecream!',
  icon: 'warning',
  actions: [
    {
      // NotificationAction api format
      title: 'Fix It!',
      icon: 'close',
      action: 'fixit' // action will be available as evt.detail.reason in the onClose event
    },
    {
      // OR SnackbarActionProps format
      label: 'Continue...',
      icon: 'check',
      onClick: () => {}
    },
  ]
});


```

```jsx
() => {
  const { messages, notify } = createSnackbarQueue();

  function App() {
    return (
      <div>
        <Button
          label="Notify"
          onClick={() =>
            notify({
              title: <b>Success</b>,
              body: 'You have selected pizza!',
              dismissesOnAction: true,
              icon: 'check',
              actions: [
                {
                  title: 'Dismiss'
                }
              ]
            })
          }
        />
        <SnackbarQueue messages={messages} />
      </div>
    );
  }
  return <App />;
};
```

## Snackbar

A Snackbar component for notifications.

### Props

| Name                | Type                                   | Description                                                                      |
| ------------------- | -------------------------------------- | -------------------------------------------------------------------------------- |
| `action`            | `ReactNode \| ReactNode[]`             | One or more actions to add to the snackbar.                                      |
| `dismissIcon`       | `IconPropT`                            |                                                                                  |
| `dismissesOnAction` | `boolean`                              | Whether or not your want clicking an action to close the Snackbar.               |
| `foundationRef`     | `Ref<null \| MDCSnackbarFoundation<>>` | Advanced: A reference to the MDCFoundation.                                      |
| `icon`              | `IconPropT`                            | An icon for the snackbar                                                         |
| `leading`           | `boolean`                              |                                                                                  |
| `message`           | `ReactNode`                            | A string or other renderable JSX to be used as the message body.                 |
| `onClose`           | `(evt: SnackbarOnCloseEventT) => void` | A callback thats fired when the Snackbar hides. evt.detail = { reason?: string } |
| `onOpen`            | `(evt: SnackbarOnOpenEventT) => void`  | A callback thats fired when the Snackbar shows.                                  |
| `open`              | `boolean`                              | Show the Snackbar.                                                               |
| `stacked`           | `boolean`                              | Places the action underneath the message text.                                   |
| `timeout`           | `number`                               | Milliseconds to show the Snackbar for. Set to -1 to show indefinitely.           |

## SnackbarAction

A button for a snackbar action.

### Props

| Name           | Type          | Description                                                                                                     |
| -------------- | ------------- | --------------------------------------------------------------------------------------------------------------- |
| `action`       | `string`      | An action returned in evt.detail.reason to the onClose handler.                                                 |
| `children`     | `ReactNode`   | Content specified as children.                                                                                  |
| `danger`       | `boolean`     | Used to indicate a dangerous action.                                                                            |
| `dense`        | `boolean`     | Make the Button dense.                                                                                          |
| `disabled`     | `boolean`     | Make the button disabled                                                                                        |
| `icon`         | `IconPropT`   | An Icon for the Button                                                                                          |
| `label`        | `any`         | Content specified as a label prop.                                                                              |
| `outlined`     | `boolean`     | Make the button outlined.                                                                                       |
| `raised`       | `boolean`     | Make the Button raised.                                                                                         |
| `ripple`       | `RipplePropT` | Adds a ripple effect to the component                                                                           |
| `touch`        | `boolean`     | Makes the button more touch friendly. This will automatically be set true if used inside of TouchTargetWrapper. |
| `trailingIcon` | `IconPropT`   | A trailing icon for the Button                                                                                  |
| `unelevated`   | `boolean`     | Make the button unelevated.                                                                                     |
