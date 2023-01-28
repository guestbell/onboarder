[@guestbell/onboarder](../README.md) / [Exports](../modules.md) / OnboarderProps

# Interface: OnboarderProps<TState, TExtraStepProps\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |
| `TExtraStepProps` | extends `Object` |

## Table of contents

### Properties

- [StepContainer](OnboarderProps.md#stepcontainer)
- [debug](OnboarderProps.md#debug)
- [finalSteps](OnboarderProps.md#finalsteps)
- [initialStep](OnboarderProps.md#initialstep)
- [steps](OnboarderProps.md#steps)
- [structure](OnboarderProps.md#structure)

## Properties

### StepContainer

• `Optional` **StepContainer**: [`StepContainerComponent`](../modules.md#stepcontainercomponent)<`TState`, {}\>

#### Defined in

[src/components/onboarder/Onboarder.tsx:17](https://github.com/guestbell/onboarder/blob/cd32abf/src/components/onboarder/Onboarder.tsx#L17)

___

### debug

• `Optional` **debug**: `boolean`

#### Defined in

[src/components/onboarder/Onboarder.tsx:19](https://github.com/guestbell/onboarder/blob/cd32abf/src/components/onboarder/Onboarder.tsx#L19)

___

### finalSteps

• **finalSteps**: keyof `TState`[]

#### Defined in

[src/components/onboarder/Onboarder.tsx:15](https://github.com/guestbell/onboarder/blob/cd32abf/src/components/onboarder/Onboarder.tsx#L15)

___

### initialStep

• **initialStep**: keyof `TState`

#### Defined in

[src/components/onboarder/Onboarder.tsx:14](https://github.com/guestbell/onboarder/blob/cd32abf/src/components/onboarder/Onboarder.tsx#L14)

___

### steps

• **steps**: [`Steps`](../modules.md#steps)<`TState`, `TExtraStepProps`\>

#### Defined in

[src/components/onboarder/Onboarder.tsx:13](https://github.com/guestbell/onboarder/blob/cd32abf/src/components/onboarder/Onboarder.tsx#L13)

___

### structure

• `Optional` **structure**: [`Structure`](../modules.md#structure)<`TState`\>

#### Defined in

[src/components/onboarder/Onboarder.tsx:16](https://github.com/guestbell/onboarder/blob/cd32abf/src/components/onboarder/Onboarder.tsx#L16)
