export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_NAME: string;
      DATABASE_USER: string;
      DATABASE_PASSWORD: string;
      DATABASE_HOST: string;
      JWT_SECRET_KEY: string;
      PORT:number,
      ORIGIN:string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}

