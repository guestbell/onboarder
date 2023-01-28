@guestbell/onboarder / [Exports](modules.md)

# Onboarder

There are a lot of react steppers/wizards/onboarding libs out there. Onboarder is different:

- Tiny - <2kb gzip
- Non-linear - Jump between steps
- 0 dependencies - Build your UI or use our
- Easy setup
- Typed API
- Calculates time remaining and remaining steps - not so easy with non-linear steps, right? :)

# Install

```sh
npm install @guestbell/onboarder --save
```

or

```sh
yarn add @guestbell/onboarder
```

# See it in action

[Complex UI](https://guestbell.github.io/onboarder/?path=/story/fancy--default) or [Simple example](https://guestbell.github.io/onboarder/?path=/story/simple--default)

# Getting started

Following example will show you how to create wizard with:
- Loop step (exit loop based on rules)
- Step with form validation
- Step with error message

1. Put your imports in place

```typescript
import Onboarder, { Steps, Structure } from "@guestbell/onboarder";
```
2. Create state for your steps
```typescript
type OnboarderState = {
  firstStep: never;
  loopStep: { 
    counter: number; 
    isDirty: boolean; 
    errorMessage?: string 
  };
  afterLoopStep: never;
  textStep: { message: string };
  finalStep: never;
};
```
3. Create steps strongly typed with the help of generic ```Steps``` type. Each object key is a step
```typescript
const steps: Steps<OnboarderState> = {
  firstStep: { Component: () => <>First step</> },
  loopStep: {
    Component: ({ setState, state }) => (
      <>
        <div>Loop step</div>
        {state.errorMessage && <div>Error: {state.errorMessage}</div>}
        <button
          onClick={() =>
            setState({ ...state, counter: state.counter + 1, isDirty: true })
          }
        >
          {state.counter.toString()}
        </button>
      </>
    ),
    initialState: {
      counter: 0,
      isDirty: false,
    },
    // Cleanup
    afterNext: ({ state, setState }) => {
      setState({ ...state, isDirty: false, errorMessage: undefined });
    },
    // On the flight validation that fires when you click next
    beforeNext: ({ state, setState }) => {
      if (state.counter < 2) {
        setState({
          ...state,
          errorMessage: "Increment to at least 2 because rules",
        });
        return false;
      }
      return true;
    },
  },
  afterLoopStep: {
    Component: ({ nextStep }) => (
      <>{nextStep === "loopStep" ? "We are looping" : "We're done looping."}</>
    ),
  },
  textStep: {
    Component: ({ setState, state }) => (
      <>
        <input
          value={state.message}
          onChange={(e) => setState({ ...state, message: e.target.value })}
        />
        <br />
        Message: {state.message}
      </>
    ),
    initialState: {
      message: "",
    },
  },
  finalStep: {
    Component: () => <>All done!!!</>,
  },
};
```
4. Define structure - this tells the lib how to jump between steps
```typescript
const structure: Structure<OnboarderState> = {
  firstStep: () => ({ loopStep: 1 }),
  loopStep: (state) => ({
    afterLoopStep: state.loopStep.isDirty ? 1 : undefined,
  }),
  afterLoopStep: (state) => ({
    loopStep: state.loopStep?.counter < 3 ? 1 : undefined,
    textStep: state.loopStep?.counter >= 3 ? 1 : undefined,
  }),
  textStep: (state) => ({
    finalStep: (state.textStep?.message && 1) || undefined,
  }),
};
```
Notice how the object has same (optional) keys like our steps. Each gets passed a global state, and returns an object with same (optional) keys like our steps. Values of this object work like this:
a) **Null** means the step is allowed, but disabled based on a condition
b) **Number** means the step is allowed, actual number gives step priority, smaller number means higher priority
c) **Undefined** or **key missing** means the step is never allowed 
5. Put it all together
```tsx
<Onboarder
  steps={steps}
  initialStep="firstStep"
  // array because multiple steps can be final
  finalSteps={['finalStep']}
  structure={structure}
  StepContainer={SimpleStepContainer}
/>
```
6. Bonus: Add simple UI
This example already works, but let's add some simple UI. You do this by providing a ```StepContainer``` prop to ```<Onboarder/>```
```tsx
import { StepContainerComponentProps } from "@guestbell/onboarder";

function SimpleStepContainer<TState extends {}>(
  props: React.PropsWithChildren<StepContainerComponentProps<TState>>
) {
  const {
    children,
    goToNextStep,
    hasNextStep,
    goToUndoStep,
    hasUndoStep,
    hasRedoStep,
    goToRedoStep,
    reset,
  } = props;
  return (
    <div>
      {children}
      <div style={{ marginTop: "1rem" }}>
        <button onClick={reset}>Reset</button>
        <button onClick={goToUndoStep} disabled={!hasUndoStep}>
          Previous
        </button>
        <button onClick={goToRedoStep} disabled={!hasRedoStep}>
          Next
        </button>
        <button onClick={goToNextStep} disabled={!hasNextStep}>
          Continue
        </button>
      </div>
    </div>
  );
}
```
7. Done!
You can see this example on [github](https://github.com/guestbell/onboarder/blob/main/src/example/simple/Simple.tsx)

# API
[Here](https://github.com/guestbell/onboarder/blob/main/api-docs/modules.md)

# FAQ
## How can I add my extra props to the step?
Notice that ```Steps``` has 2 generic parameters. First is the type of the state, you can use the second generic parameter to introduce extra props to your step.

## How can I fire an action before going to next step?
Each step has a ```beforeNext``` async function. Use it to handle your logic. Return false if the navigation should be prevented.

## How do I clean up step state after navigation?
Each step has a ```afterNext``` async function. Use it for cleanup.
