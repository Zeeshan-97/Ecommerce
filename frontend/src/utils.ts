import type { ApiError } from "./types/ApiError";

export const getError = (error: ApiError): string => {
  if (typeof error === "string") {
    return error;
  } else if (error instanceof Error) {
    return error.message;
  } else if (
    typeof error === "object" &&
    error !== null &&
    "message" in error &&
    typeof (error as { message: unknown }).message === "string"
  ) {
    return (error as { message: string }).message;
  } else {
    return "An unknown error occurred";
  }
}