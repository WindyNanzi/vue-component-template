import type { StyleValue } from 'vue-demi'
import { computed, defineComponent, h, inject } from 'vue-demi'

import { toggleDark } from '../composables'
import { InjectionOptions } from '../constants'
import { defaultOptions } from '../options'
import { nanoid } from '../utils'

export const HelloWorld = defineComponent({
  name: 'HelloWorld',
  props: defaultOptions,
  setup(props) {
    const sp = inject(InjectionOptions)
    const options = {
      ...sp,
      ...props,
    }

    const style = computed((): StyleValue => {
      return {
        fontSize: options.fontSize,
        userSelect: options.selectAble ? 'auto' : 'none',
      }
    })

    const key = nanoid()

    return () => h(
      'div',
      { style: style.value, _key: key },
      [
        h(
          'p',
          null,
          `Hello World！${options.suffix}`,
        ),
        h(
          'button',
          { onClick: () => toggleDark(), style: { fontSize: '16px' } },
          '切换主题',
        ),
      ],
    )
  },
})
