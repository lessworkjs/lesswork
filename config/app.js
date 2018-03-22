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
  //'adonis-redis/providers/RedisFactoryProvider',
  //'adonis-redis/providers/RedisProvider',
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
  Helpers: 'Lesswork/Helpers',
  // Database: 'Adonis/Src/Database',
  //Redis: 'Adonis/Addons/Redis',
};

module.exports = {
  providers,
  aliases
};