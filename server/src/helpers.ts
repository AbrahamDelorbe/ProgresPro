export const areEnvVariablesDefined = (
  ...vars: (string | undefined | null)[]
): boolean => {
  return vars.every(
    (v) =>
      typeof v === "string" && v.trim() !== "" && v !== undefined && v !== null
  );
};
