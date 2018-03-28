'use strict';

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Application Environment
  |--------------------------------------------------------------------------
  |
  | This value determines the "environment" your application is currently
  | running in. This may determine how you prefer to configure various
  | services your application utilizes. Set this in your ".env.js" file.
  |
  */

  env: env('APP_ENV', 'production'),

  /*
  |--------------------------------------------------------------------------
  | Application Debug Mode
  |--------------------------------------------------------------------------
  |
  | When your application is in debug mode, detailed error messages with
  | stack traces will be shown on every error that occurs within your
  | application. If disabled, a simple generic error page is shown.
  |
  */

  debug: env('APP_DEBUG', false),

  /*
  |--------------------------------------------------------------------------
  | Application Timezone
  |--------------------------------------------------------------------------
  |
  | Here you may specify the default timezone for your application, which
  | will be used by the PHP date and date-time functions. We have gone
  | ahead and set this to a sensible default for you out of the box.
  |
  */

  timezone: env('APP_TIMEZONE', 'UTC'),

  /*
  |--------------------------------------------------------------------------
  | Application Locale Configuration
  |--------------------------------------------------------------------------
  |
  | The application locale determines the default locale that will be used
  | by the translation service provider. You are free to set this value
  | to any of the locales which will be supported by the application.
  |
  */

  locale: env('APP_LOCALE'),

  /*
  |--------------------------------------------------------------------------
  | Application Fallback Locale
  |--------------------------------------------------------------------------
  |
  | The fallback locale determines the locale to use when the current one
  | is not available. You may change the value to correspond to any of
  | the language folders that are provided through your application.
  |
  */

  fallback_locale: env('APP_LOCALE'),

  /*
  |--------------------------------------------------------------------------
  | Encryption Key
  |--------------------------------------------------------------------------
  |
  | This key is used by the Illuminate encrypter service and should be set
  | to a random, 32 character string, otherwise these encrypted strings
  | will not be safe. Please do this before deploying an application!
  |
  */

  key: env('APP_KEY'),

  cipher: 'AES-256-CBC',

  /*
  |--------------------------------------------------------------------------
  | Autoloaded Service Providers
  |--------------------------------------------------------------------------
  |
  | The service providers listed here will be automatically loaded on the
  | request to your application. Feel free to add your own services to
  | this array to grant expanded functionality to your applications.
  |
  */
  providers: [
    'lesswork-framework/providers/AppProvider',
    'lesswork-framework/providers/MiddlewareProvider',
    'lesswork-framework/providers/RequestProvider',
    'lesswork-framework/providers/ResponseProvider',
    'lesswork-framework/providers/EventProvider',
    'lesswork-framework/providers/LintlProvider',
  ],

  /*
  |--------------------------------------------------------------------------
  | Class Aliases
  |--------------------------------------------------------------------------
  |
  | This array of class aliases will be registered when this application
  | is started. However, feel free to register as many as you wish as
  | the aliases are "lazy" loaded so they don't hinder performance.
  |
  */
  aliases: {
    App: 'Lesswork/Src/App',
    Response: 'Lesswork/Src/Response',
    Config: 'Lesswork/Src/Config',
    Helpers: 'Lesswork/Src/Helpers',
    Env: 'Lesswork/Src/Env',
    Event: 'Lesswork/Src/Event',
    Request: 'Lesswork/Src/Request',
    State: 'Lesswork/Src/State',
    Exception: 'Lesswork/Src/Exception',
    Route: 'Lesswork/Src/Route',
    ErrorTransformer: 'lesswork-framework/src/Transformers/ErrorTransformer',
    Lintl: 'Lesswork/Src/Lintl',
    Middleware: 'Lesswork/Src/Middleware',
  },

  /*
  |--------------------------------------------------------------------------
  | Work Providers
  |--------------------------------------------------------------------------
  |
  | Work providers are specific to work, and are not registered when running routes. It helps in reducing boot time.
  |
  */
  workProviders: [
    //
  ],

  /*
  |--------------------------------------------------------------------------
  | Work Commands
  |--------------------------------------------------------------------------
  |
  | Work Commands are also are registered inside the IoC container. Here we
  | register with Work Kernel using their unique namespace.
  |
  */
  commands: {
    //'great': './app/Console/Commands/GreetCommand',
  },

  /*
  |--------------------------------------------------------------------------
  | Serverless Autoload Functions
  |--------------------------------------------------------------------------
  |
  | The following paths will be automatically loaded as functions
  | in your serverless configuration.
  |
  */
  functions: [
    '../routes',
    'Http/Authentication',
    'Http/Functions',
  ],
};