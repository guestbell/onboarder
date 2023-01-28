import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import * as React from "react";
import Onboarder, { Steps, Structure, useGlobalState } from "../..";
import { CustomList } from "../material-ui/CustomList";
import FancyStepContainer, {
  ExtraStepProps,
} from "./stepContainer/FancyStepContainer";

export interface FancyProps {
  debug?: boolean;
}

type OnboarderState = {
  firstStep: never;
  loopStep: { counter: number; isDirty: boolean; errorMessage?: string };
  afterLoopStep: never;
  textStep: { message: string };
  finalStep: never;
};

const steps: Steps<OnboarderState, ExtraStepProps> = {
  firstStep: {
    Component: ({ goToNextStep }) => (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100%"
      >
        <Typography variant="h3" marginBottom={2}>
          👋Welcome!
        </Typography>
        <Typography variant="subtitle1">
          Let's explore a wizard built with <code>@guestbell/onboarder</code>{" "}
          and <code>@mui</code>
        </Typography>
        <Button
          sx={{ marginTop: 10 }}
          variant="contained"
          onClick={goToNextStep}
          disableElevation={true}
        >
          Get started
        </Button>
      </Box>
    ),
    title: "First step",
    subtitle: "Default UI hidden",
    hideUi: true,
    timeRequiredSec: 15,
  },
  loopStep: {
    Component: ({ setState, state }) => (
      <>
        {state.errorMessage && (
          <Alert severity="error">{state.errorMessage}</Alert>
        )}
        <CustomList>
          <ListItem
            secondaryAction={
              <Button
                onClick={() =>
                  setState({
                    ...state,
                    counter: state.counter + 1,
                    isDirty: true,
                  })
                }
                variant="contained"
                disableElevation={true}
              >
                {state.counter.toString()}
              </Button>
            }
          >
            <ListItemText
              primary="Counter"
              secondary="Press it once and click continue"
            />
          </ListItem>
        </CustomList>
      </>
    ),
    initialState: {
      counter: 0,
      isDirty: false,
    },
    afterNext: ({ state, setState }) => {
      setState({ ...state, isDirty: false, errorMessage: undefined });
    },
    beforeNext: ({ state, setState }) => {
      if (state.counter < 2) {
        setState({
          ...state,
          errorMessage:
            "Increment to at least 2 before you continue. Notice that navigation to next step stopped",
        });
        return false;
      }
      return true;
    },
    title: "Loop step",
    subtitle: "Loop if counter <= 2",
    timeRequiredSec: 25,
  },
  afterLoopStep: {
    title: "After loop step",
    subtitle: "Next step based on counter",
    Component: ({ nextStep }) => (
      <>{nextStep === "loopStep" ? "We are looping" : "We're done looping."}</>
    ),
    timeRequiredSec: 10,
  },
  textStep: {
    title: "Text step",
    subtitle: "Leave us a message",
    Component: ({ setState, state }) => (
      <>
        <CustomList>
          <ListItem
            secondaryAction={
              <TextField
                error={!Boolean(state.message)}
                value={state.message}
                onChange={(e) =>
                  setState({ ...state, message: e.target.value })
                }
                variant="standard"
                required={true}
                helperText={
                  !Boolean(state.message) ? "Message is required" : undefined
                }
              />
            }
          >
            <ListItemText
              primary="*Simple text field"
              secondary={`Message from state: ${state.message}`}
            />
          </ListItem>
        </CustomList>
      </>
    ),
    initialState: {
      message: "",
    },
    timeRequiredSec: 42,
  },
  finalStep: {
    title: "Final step",
    subtitle: "With reset",
    Component: ({ journey, reset }) => {
      const globalState = useGlobalState<OnboarderState>();
      return (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          minHeight="100%"
        >
          <Typography variant="h3" marginBottom={2}>
            🎉Congrats🎉
          </Typography>
          <Typography variant="subtitle1">
            You made it through the whole wizard. It took you {journey.length}{" "}
            steps, you clicked the loop button {globalState.loopStep.counter}{" "}
            times, and left us a message "{globalState.textStep.message}".
          </Typography>
          <Typography marginTop={2} variant="subtitle1">
            Now go and create your own wizard with{" "}
            <code>@guestbell/onboarder</code>! Or reset this and continue
            exploring😊
          </Typography>
          <Button
            sx={{ marginTop: 6 }}
            variant="contained"
            onClick={reset}
            disableElevation={true}
          >
            Reset
          </Button>
        </Box>
      );
    },
    hideUi: true,
    timeRequiredSec: 13,
  },
};

const finalSteps: (keyof OnboarderState)[] = ["finalStep"];

const structure: Structure<OnboarderState> = {
  firstStep: () => ({ loopStep: 1 }),
  loopStep: (state) => ({ afterLoopStep: state.loopStep.isDirty ? 1 : null }),
  afterLoopStep: (state) => ({
    loopStep: state.loopStep?.counter < 3 ? 1 : null,
    textStep: state.loopStep?.counter >= 3 ? 1 : null,
  }),
  textStep: (state) => ({
    finalStep: (state.textStep?.message && 1) || null,
  }),
};

export const Fancy: React.FC<FancyProps> = ({ debug }) => {
  return (
    <>
      <Onboarder
        steps={steps}
        initialStep="firstStep"
        finalSteps={finalSteps}
        structure={structure}
        StepContainer={FancyStepContainer}
        debug={debug}
      />
    </>
  );
};

export default Fancy;
