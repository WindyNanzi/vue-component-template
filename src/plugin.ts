import type { Plugin } from 'vue'
import { HelloWorld } from './components/HelloWorld'
import { InjectionOptions } from './constants'
import type { HelloWorldPluginOption } from './types'

export function HelloWorldPlugin(defaultPluginOptions: HelloWorldPluginOption = {}): Plugin {
  return {
    install(app) {
      app.provide(InjectionOptions, defaultPluginOptions)
      app.component('HelloWorld', HelloWorld)
    },
  }
}
