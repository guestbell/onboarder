import React from "react";
import { StepContainerComponentProps } from "./StepContainer";

export type SetState<TStepState> = (
  state: TStepState | ((state: TStepState) => TStepState)
) => void;

export type StepComponentProps<
  TState extends {},
  TStepState,
  TExtraStepProps extends {} = {}
> = StepContainerComponentProps<TState, TExtraStepProps> & {
  state: TStepState;
  setState: SetState<TStepState>;
};

export type StepComponent<
  TState extends {},
  TStepState,
  TExtraStepProps extends {} = {}
> = React.ComponentType<
  StepComponentProps<TState, TStepState, TExtraStepProps>
>;

export type HookConfig<TState extends {}, TStepState> = {
  state: TStepState;
  setState: SetState<TStepState>;
};

export type HookType<TState extends {}, TStepState, TRet> = (
  config: HookConfig<TState, TStepState>
) => TRet | Promise<TRet>;

export type Step<TState extends {}, TStepState, TExtraStepProps extends {}> = {
  Component: StepComponent<TState, TStepState>;
  initialState?: TStepState;
  afterNext?: HookType<TState, TStepState, void>;
  beforeNext?: HookType<TState, TStepState, boolean>;
  timeRequiredSec?: number;
} & TExtraStepProps;

export type Steps<TState extends {}, TExtraStepProps extends {} = {}> = {
  [key in keyof TState]: Step<TState, TState[key], TExtraStepProps>;
};
