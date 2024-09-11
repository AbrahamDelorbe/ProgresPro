import dotenv from "dotenv";

export function envConfig() {
  const config = dotenv.config();

  if (config.error) {
    throw new Error(`Wrong env variable config, please check...`);
  }

  return config.parsed;
}

envConfig();
