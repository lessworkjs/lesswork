'use strict';

/*
|--------------------------------------------------------------------------
| Application Providers
|--------------------------------------------------------------------------
|
| Here we configure the providers required to run lesswork application. They
| are registered only once and can be used inside any file using `use`
| keyword.
|
*/
const providers = [
  'lesswork-framework/Providers/AppProvider',
  'lesswork-framework/Providers/RequestProvider',
  'lesswork-framework/Providers/ResponseProvider',
  'lesswork-framework/Providers/EventProvider',
];

/*
|--------------------------------------------------------------------------
| Namespace Aliases
|--------------------------------------------------------------------------
|
| Each provider is registered with a long unique namespace. Here we alias
| them with a short unique name to keep our import statements short and
| sweet.
|
*/
const aliases = {
  App: 'Lesswork/App',
  Response: 'Lesswork/Response',
  Config: 'Lesswork/Config',
  Helpers: 'Lesswork/Helpers',
  Env: 'Lesswork/Env',
  Event: 'Lesswork/Event',
  Request: 'Lesswork/Request',
  State: 'Lesswork/State',
  Exception: 'Lesswork/Exception',
  ErrorTransformer: 'lesswork-framework/Transformers/ErrorTransformer',
};

/*
|--------------------------------------------------------------------------
| Work Providers
|--------------------------------------------------------------------------
|
| Work providers are specific to work, and are not registered when running routes. It helps in reducing boot time.
|
*/
const workProviders = [];

/*
|--------------------------------------------------------------------------
| Work Commands
|--------------------------------------------------------------------------
|
| Work Commands are also are registered inside the IoC container. Here we
| register with Work Kernel using their unique namespace.
|
*/
const commands = {
  //'great': './app/Console/Commands/GreetCommand',
};

// serverless functions to be autoloaded.
const functions = [
  'Http/Routes',
  'Http/Authentication',
  'Http/Functions',
];

module.exports = {
  providers,
  aliases,
  workProviders,
  commands,
  functions
};