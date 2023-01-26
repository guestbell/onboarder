import * as React from "react";

export interface JSONDebuggerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  enabled?: boolean;
}

const replacer = (_: any, value: any) =>
  typeof value === "undefined" ? null : value;

const JSONDebugger: React.FC<JSONDebuggerProps> = ({
  value,
  enabled = true,
}) => {
  return enabled ? <pre>{JSON.stringify(value, replacer, 2)}</pre> : null;
};

export default JSONDebugger;
