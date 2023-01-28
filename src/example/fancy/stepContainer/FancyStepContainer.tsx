import * as React from "react";
import { StepContainerComponentProps } from "../../../types/StepContainer";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowForward from "@mui/icons-material/ArrowRightAlt";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import { IconButton } from "@mui/material";
import { duration } from "dayjs";

export interface StepContainerProps {}

export type ExtraStepProps = {
  hideUi?: boolean;
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
};

function FancyStepContainer<TState extends {}>(
  props: React.PropsWithChildren<
    StepContainerComponentProps<TState, ExtraStepProps>
  >
) {
  const {
    children,
    goToNextStep,
    hasNextStep,
    goToUndoStep,
    hasUndoStep,
    hasRedoStep,
    goToRedoStep,
    steps,
    journey,
    journeyPosition,
    currentStep,
    shortestStepsRemaining,
    shortestRemainingJourney,
    remainingTimeSec,
  } = props;
  const lookedUpJourney = React.useMemo(
    () => journey.map((a) => steps[a]),
    [journey, steps]
  );
  const lookedUpShortestRemainingJourney = React.useMemo(
    () => shortestRemainingJourney.map((a) => steps[a]),
    [journey, steps]
  );
  const lookedUpSteps = [
    ...lookedUpJourney,
    ...lookedUpShortestRemainingJourney,
  ];
  const currentStepInstance = steps[currentStep];
  return (
    <Box display="flex" flexDirection="column" height="100vh" width="100vw">
      <Box display="flex" flex={1}>
        <Box
          component="aside"
          width={240}
          bgcolor="#F8F8F8"
          alignItems="center"
          display="flex"
          maxHeight="100vh"
          overflow="auto"
          zIndex={2}
        >
          <Stepper
            activeStep={journeyPosition}
            orientation="vertical"
            connector={<div />}
            sx={{ width: "100%" }}
          >
            {lookedUpSteps.map((step, index) => (
              <Step
                key={index}
                sx={{
                  paddingLeft: 2,
                  paddingRight: 2,
                  backgroundColor:
                    index === journeyPosition ? "#D1EAF6" : undefined,
                }}
              >
                {step.title && (
                  <StepLabel
                    optional={
                      step.subtitle && (
                        <Typography variant="caption" color="inherit">
                          {step.subtitle}
                        </Typography>
                      )
                    }
                    sx={{
                      color: index !== journeyPosition ? "#D1EAF6" : undefined,
                    }}
                  >
                    {step.title}
                  </StepLabel>
                )}
              </Step>
            ))}
            {/*!finalSteps?.includes(journey[journey?.length - 1]) &&
              (!nextStep || !finalSteps?.includes(nextStep)) && (
                <>
                  <Step>
                    <StepLabel
                      optional={
                        <Typography variant="caption">
                          Just a few more steps ...
                        </Typography>
                      }
                      icon={
                        <Box
                          borderRadius="50%"
                          display="flex"
                          sx={{ backgroundColor: "text.disabled" }}
                        >
                          <MoreHorizIcon htmlColor="white" />
                        </Box>
                      }
                    >
                      Almost done
                    </StepLabel>
                  </Step>
                </>
                    )*/}
          </Stepper>
        </Box>
        <Box
          component="main"
          flex={1}
          display="flex"
          flexDirection="column"
          maxHeight="100vh"
        >
          {!currentStepInstance?.hideUi ? (
            <Box padding={2} paddingBottom={0} textAlign="center">
              <Typography variant="caption" color="#bfbfbf">
                <IconButton onClick={goToUndoStep} disabled={!hasUndoStep}>
                  <KeyboardArrowLeft />
                </IconButton>
                Step {journeyPosition + 1} of{" "}
                {journey.length + shortestStepsRemaining}{" "}
                <IconButton onClick={goToRedoStep} disabled={!hasRedoStep}>
                  <KeyboardArrowRight />
                </IconButton>
              </Typography>
              <br />
              {remainingTimeSec ? (
                <Typography variant="caption">
                  Around {duration(remainingTimeSec, "second").humanize()} to
                  finish
                </Typography>
              ) : null}
              <Typography variant="h3">{currentStepInstance.title}</Typography>
              {currentStepInstance.subtitle && (
                <Typography variant="subtitle1">
                  {currentStepInstance.subtitle}
                </Typography>
              )}
            </Box>
          ) : null}
          <Box padding={2} paddingTop={0} overflow="auto">
            {children}
          </Box>
          {!currentStepInstance?.hideUi ? (
            <Box
              marginTop="auto"
              display="flex"
              justifyContent="end"
              sx={{ boxShadow: "0 0 7px 0px rgb(1 1 1 / 14%)" }}
              padding={2}
            >
              <Button
                onClick={goToNextStep}
                disabled={!hasNextStep}
                variant="contained"
              >
                Continue
                <ArrowForward />
              </Button>
            </Box>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}

export default FancyStepContainer;
