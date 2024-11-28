import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://20dc320d164e4a7b419dd1509f03df71@o4508309309554688.ingest.us.sentry.io/4508373436530688",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "dark",
    }),
  ],
});