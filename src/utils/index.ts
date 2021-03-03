import { Headers } from "types";

export const getHeaders = (projectId?: string): Headers | null => {
  if (!projectId) {
    return null;
  }

  return {
    project_id: projectId,
  };
};
