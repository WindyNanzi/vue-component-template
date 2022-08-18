import type { StyleValue } from 'vue-demi'
import { computed, defineComponent, h, inject, unref } from 'vue-demi'

import { isDark, toggleDark } from '../composables'
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

    const color = computed((): string => {
      return unref(isDark) ? 'white' : 'black'
    })

    // const style: CSSProperties = {
    //   fontSize: options.fontSize,
    //   userSelect: options.selectAble ? 'auto' : 'none',
    //   color,
    // }

    const style = computed((): StyleValue => {
      return {
        fontSize: options.fontSize,
        userSelect: options.selectAble ? 'auto' : 'none',
        color: color.value,
      }
    })

    // eslint-disable-next-line no-console
    console.log(options)
    const key = nanoid()

    return () => h(
      'div',
      { style: style.value, key },
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
