[@guestbell/onboarder](README.md) / Exports

# @guestbell/onboarder

## Table of contents

### References

- [default](modules.md#default)

### Interfaces

- [OnboarderProps](interfaces/OnboarderProps.md)

### Type Aliases

- [HookConfig](modules.md#hookconfig)
- [HookType](modules.md#hooktype)
- [NextStepFunc](modules.md#nextstepfunc)
- [ResetAction](modules.md#resetaction)
- [Step](modules.md#step)
- [StepComponent](modules.md#stepcomponent)
- [StepComponentProps](modules.md#stepcomponentprops)
- [StepContainerComponent](modules.md#stepcontainercomponent)
- [StepContainerComponentProps](modules.md#stepcontainercomponentprops)
- [Steps](modules.md#steps)
- [Structure](modules.md#structure)

### Variables

- [StateContext](modules.md#statecontext)

### Functions

- [Onboarder](modules.md#onboarder)
- [StateContextConsumer](modules.md#statecontextconsumer)
- [StateContextProvider](modules.md#statecontextprovider)
- [useGlobalState](modules.md#useglobalstate)

## References

### default

Renames and re-exports [Onboarder](modules.md#onboarder)

## Type Aliases

### HookConfig

Ƭ **HookConfig**<`TState`, `TStepState`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |
| `TStepState` | `TStepState` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `setState` | (`state`: `TStepState`) => `void` |
| `state` | `TStepState` |

#### Defined in

[src/types/Step.ts:21](https://github.com/guestbell/onboarder/blob/8559c04/src/types/Step.ts#L21)

___

### HookType

Ƭ **HookType**<`TState`, `TStepState`, `TRet`\>: (`config`: [`HookConfig`](modules.md#hookconfig)<`TState`, `TStepState`\>) => `TRet` \| `Promise`<`TRet`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |
| `TStepState` | `TStepState` |
| `TRet` | `TRet` |

#### Type declaration

▸ (`config`): `TRet` \| `Promise`<`TRet`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `config` | [`HookConfig`](modules.md#hookconfig)<`TState`, `TStepState`\> |

##### Returns

`TRet` \| `Promise`<`TRet`\>

#### Defined in

[src/types/Step.ts:26](https://github.com/guestbell/onboarder/blob/8559c04/src/types/Step.ts#L26)

___

### NextStepFunc

Ƭ **NextStepFunc**<`TState`, `TKey`\>: (`state`: `TState`) => { [key in keyof Exclude<TState, TKey\>]?: number \| null }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |
| `TKey` | `TKey` |

#### Type declaration

▸ (`state`): { [key in keyof Exclude<TState, TKey\>]?: number \| null }

##### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `TState` |

##### Returns

{ [key in keyof Exclude<TState, TKey\>]?: number \| null }

#### Defined in

[src/types/Structure.ts:1](https://github.com/guestbell/onboarder/blob/8559c04/src/types/Structure.ts#L1)

___

### ResetAction

Ƭ **ResetAction**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `type` | ``"reset"`` |
| `value?` | `never` |

#### Defined in

[src/components/onboarder/Onboarder.tsx:26](https://github.com/guestbell/onboarder/blob/8559c04/src/components/onboarder/Onboarder.tsx#L26)

___

### Step

Ƭ **Step**<`TState`, `TStepState`, `TExtraStepProps`\>: { `Component`: [`StepComponent`](modules.md#stepcomponent)<`TState`, `TStepState`\> ; `afterNext?`: [`HookType`](modules.md#hooktype)<`TState`, `TStepState`, `void`\> ; `beforeNext?`: [`HookType`](modules.md#hooktype)<`TState`, `TStepState`, `boolean`\> ; `initialState?`: `TStepState` ; `timeRequiredSec?`: `number`  } & `TExtraStepProps`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |
| `TStepState` | `TStepState` |
| `TExtraStepProps` | extends `Object` |

#### Defined in

[src/types/Step.ts:30](https://github.com/guestbell/onboarder/blob/8559c04/src/types/Step.ts#L30)

___

### StepComponent

Ƭ **StepComponent**<`TState`, `TStepState`, `TExtraStepProps`\>: `React.ComponentType`<[`StepComponentProps`](modules.md#stepcomponentprops)<`TState`, `TStepState`, `TExtraStepProps`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |
| `TStepState` | `TStepState` |
| `TExtraStepProps` | extends `Object` = {} |

#### Defined in

[src/types/Step.ts:13](https://github.com/guestbell/onboarder/blob/8559c04/src/types/Step.ts#L13)

___

### StepComponentProps

Ƭ **StepComponentProps**<`TState`, `TStepState`, `TExtraStepProps`\>: [`StepContainerComponentProps`](modules.md#stepcontainercomponentprops)<`TState`, `TExtraStepProps`\> & { `setState`: (`state`: `TStepState`) => `void` ; `state`: `TStepState`  }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |
| `TStepState` | `TStepState` |
| `TExtraStepProps` | extends `Object` = {} |

#### Defined in

[src/types/Step.ts:4](https://github.com/guestbell/onboarder/blob/8559c04/src/types/Step.ts#L4)

___

### StepContainerComponent

Ƭ **StepContainerComponent**<`TState`, `TExtraStepProps`\>: `React.ComponentType`<[`StepContainerComponentProps`](modules.md#stepcontainercomponentprops)<`TState`, `TExtraStepProps`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |
| `TExtraStepProps` | extends `Object` = {} |

#### Defined in

[src/types/StepContainer.ts:27](https://github.com/guestbell/onboarder/blob/8559c04/src/types/StepContainer.ts#L27)

___

### StepContainerComponentProps

Ƭ **StepContainerComponentProps**<`TState`, `TExtraStepProps`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |
| `TExtraStepProps` | extends `Object` = {} |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `currentStep` | keyof `TState` |
| `finalSteps` | keyof `TState`[] |
| `goToNextStep` | () => `void` |
| `goToRedoStep` | () => `void` |
| `goToStep` | (`step`: keyof `TState`) => `void` |
| `goToUndoStep` | () => `void` |
| `hasNextStep` | `boolean` |
| `hasRedoStep` | `boolean` |
| `hasUndoStep` | `boolean` |
| `initialStep` | keyof `TState` |
| `journey` | keyof `TState`[] |
| `journeyPosition` | `number` |
| `nextStep` | keyof `TState` \| `undefined` |
| `remainingTimeSec` | `number` |
| `reset` | () => `void` |
| `shortestRemainingJourney` | keyof `TState`[] |
| `shortestStepsRemaining` | `number` |
| `steps` | [`Steps`](modules.md#steps)<`TState`, `TExtraStepProps`\> |

#### Defined in

[src/types/StepContainer.ts:3](https://github.com/guestbell/onboarder/blob/8559c04/src/types/StepContainer.ts#L3)

___

### Steps

Ƭ **Steps**<`TState`, `TExtraStepProps`\>: { [key in keyof TState]: Step<TState, TState[key], TExtraStepProps\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |
| `TExtraStepProps` | extends `Object` = {} |

#### Defined in

[src/types/Step.ts:38](https://github.com/guestbell/onboarder/blob/8559c04/src/types/Step.ts#L38)

___

### Structure

Ƭ **Structure**<`TState`\>: { [key in keyof TState]?: NextStepFunc<TState, key\> }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |

#### Defined in

[src/types/Structure.ts:5](https://github.com/guestbell/onboarder/blob/8559c04/src/types/Structure.ts#L5)

## Variables

### StateContext

• `Const` **StateContext**: `Context`<{}\>

#### Defined in

src/context/StateContext.ts:4

## Functions

### Onboarder

▸ **Onboarder**<`TState`, `TExtraStepProps`\>(`props`): `Element`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` = {} |
| `TExtraStepProps` | extends `Object` = {} |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`OnboarderProps`](interfaces/OnboarderProps.md)<`TState`, `TExtraStepProps`\> |

#### Returns

`Element`

#### Defined in

[src/components/onboarder/Onboarder.tsx:28](https://github.com/guestbell/onboarder/blob/8559c04/src/components/onboarder/Onboarder.tsx#L28)

___

### StateContextConsumer

▸ **StateContextConsumer**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ConsumerProps`<{}\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### StateContextProvider

▸ **StateContextProvider**(`props`): ``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

**NOTE**: Exotic components are not callable.

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `ProviderProps`<{}\> |

#### Returns

``null`` \| `ReactElement`<`any`, `string` \| `JSXElementConstructor`<`any`\>\>

#### Defined in

node_modules/@types/react/index.d.ts:351

___

### useGlobalState

▸ **useGlobalState**<`TState`\>(): `TState`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TState` | extends `Object` |

#### Returns

`TState`

#### Defined in

src/context/StateContext.ts:9
