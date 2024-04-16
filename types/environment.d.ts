declare namespace NodeJS {
  export interface ProcessEnv {
    HOST: string;
    PORT: string;
    NODE_ENV: 'prod' | 'dev';
    POSTGRES_PASSWORD: string;
    POSTGRES_USER: string;
    POSTGRES_PORT: string;
    POSTGRES_HOST: string;
    POSTGRES_DATABASE: string;
    JWT_ACCESS_SECRET: string;
    JWT_REFRESH_SECRET: string;
    HASH_SECRET: string;
  }
}
