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
  // 'adonis-lucid/providers/DatabaseProvider',
  // 'adonis-lucid/providers/LucidProvider',
  // 'adonis-lucid/providers/FactoryProvider',
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
  // Database: 'Adonis/Src/Database',
  Helpers: 'Lesswork/Helpers',
};

module.exports = {
  providers,
  aliases
};