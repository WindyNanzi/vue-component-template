import type { HelloWorldPluginOption } from './types'

export const defaultPluginOptions: HelloWorldPluginOption = {
  selectAble: false,
}

export const defaultOptions = {
  selectAble: {
    type: Boolean,
    required: false,
  },
  fontSize: {
    type: String,
    default: '20px',
  },
  suffix: {
    type: String,
    default: '',
  },
}
