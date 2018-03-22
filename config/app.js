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
  'lesswork-framework/providers/AppProvider',
  'lesswork-framework/providers/ResponseProvider',
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
  app: 'Lesswork/App',
  response: 'Lesswork/Response',
};

module.exports = {
  providers,
  aliases
};