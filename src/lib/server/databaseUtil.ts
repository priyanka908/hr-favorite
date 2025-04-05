"use server";

import env from "@/app/env";
import { DatabaseApi } from "portfolioapi";

export const getDatabaseApiInstance = async () => {
  return DatabaseApi.getInstance(
    env.github.username,
    env.github.repo,
    env.github.branch,
    env.github.token
  );
};
