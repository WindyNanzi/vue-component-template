import type { InjectionKey } from 'vue'
import type { HelloWorldPluginOption } from './types'

export const InjectionOptions = Symbol('vue-hello-world') as InjectionKey<HelloWorldPluginOption>
