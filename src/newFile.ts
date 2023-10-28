import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

export default (() => {
  const __VLS_setup = async () => {
    const __VLS_publicComponent = (await import('vue')).defineComponent({
      setup() {
        return {}
      }
    })

    const __VLS_componentsOption = {}

    let __VLS_name!: 'App'
    function __VLS_template() {
      let __VLS_ctx!: InstanceType<
        import('./__VLS_types.js').PickNotAny<typeof __VLS_publicComponent, new () => {}>
      > &
        InstanceType<
          import('./__VLS_types.js').PickNotAny<typeof __VLS_internalComponent, new () => {}>
        > & {}
      /* Components */
      let __VLS_localComponents!: NonNullable<
        typeof __VLS_internalComponent extends { components: infer C } ? C : {}
      > &
        typeof __VLS_componentsOption &
        typeof __VLS_ctx
      let __VLS_otherComponents!: typeof __VLS_localComponents &
        import('./__VLS_types.js').GlobalComponents
      let __VLS_own!: import('./__VLS_types.js').SelfComponent<
        typeof __VLS_name,
        typeof __VLS_internalComponent &
          typeof __VLS_publicComponent &
          (new () => { $slots: typeof __VLS_slots })
      >
      let __VLS_components!: typeof __VLS_otherComponents &
        Omit<typeof __VLS_own, keyof typeof __VLS_otherComponents>
      /* Style Scoped */
      type __VLS_StyleScopedClasses = {} & { 'page-wrapper'?: boolean } & {
        'header-wrapper'?: boolean
      } & { logo?: boolean } & { 'router-link-exact-active'?: boolean } & {
        'router-link-exact-active'?: boolean
      } & { logo?: boolean } & { wrapper?: boolean }
      let __VLS_styleScopedClasses!:
        | __VLS_StyleScopedClasses
        | keyof __VLS_StyleScopedClasses
        | (keyof __VLS_StyleScopedClasses)[]
      /* CSS variable injection */
      /* CSS variable injection end */
      let __VLS_templateComponents!: {} & import('./__VLS_types.js').WithComponent<
        'HelloWorld',
        typeof __VLS_components,
        'HelloWorld'
      > &
        import('./__VLS_types.js').WithComponent<
          'RouterLink',
          typeof __VLS_components,
          'RouterLink'
        > &
        import('./__VLS_types.js').WithComponent<
          'RouterView',
          typeof __VLS_components,
          'RouterView'
        >
      __VLS_components.HelloWorld
      // @ts-ignore
      ;[HelloWorld]
      __VLS_components.RouterLink
      __VLS_components.RouterLink
      __VLS_components.RouterLink
      __VLS_components.RouterLink
      // @ts-ignore
      ;[RouterLink, RouterLink, RouterLink, RouterLink]
      __VLS_components.RouterView
      // @ts-ignore
      ;[RouterView]
      {
        ;(({}) as JSX.IntrinsicElements).header
        ;(({}) as JSX.IntrinsicElements).header
        ;(__VLS_x as JSX.IntrinsicElements)['header'] = {}
        {
          ;(({}) as JSX.IntrinsicElements).div
          ;(({}) as JSX.IntrinsicElements).div
          ;(__VLS_x as JSX.IntrinsicElements)['div'] = { class: 'header-wrapper' }
          {
            ;(({}) as JSX.IntrinsicElements).div
            ;(({}) as JSX.IntrinsicElements).div
            ;(__VLS_x as JSX.IntrinsicElements)['div'] = {}
          }
          {
            ;(({}) as JSX.IntrinsicElements).img
            ;(__VLS_x as JSX.IntrinsicElements)['img'] = {
              alt: 'Vue logo',
              class: 'logo',
              src: '@/assets/logo.svg',
              width: '125',
              height: '125'
            }
          }
        }
        {
          ;(({}) as JSX.IntrinsicElements).div
          ;(({}) as JSX.IntrinsicElements).div
          ;(__VLS_x as JSX.IntrinsicElements)['div'] = { class: 'wrapper' }
          {
            ;(__VLS_x as import('./__VLS_types.js').ComponentProps<
              typeof __VLS_templateComponents.HelloWorld
            >) = { msg: 'You did it!' }
          }
          {
            ;(({}) as JSX.IntrinsicElements).nav
            ;(({}) as JSX.IntrinsicElements).nav
            ;(__VLS_x as JSX.IntrinsicElements)['nav'] = {}
            {
              __VLS_templateComponents.RouterLink
              ;(__VLS_x as import('./__VLS_types.js').ComponentProps<
                typeof __VLS_templateComponents.RouterLink
              >) = { to: '/' }
            }
            {
              __VLS_templateComponents.RouterLink
              ;(__VLS_x as import('./__VLS_types.js').ComponentProps<
                typeof __VLS_templateComponents.RouterLink
              >) = { to: '/about' }
            }
          }
        }
      }
      {
        ;(__VLS_x as import('./__VLS_types.js').ComponentProps<
          typeof __VLS_templateComponents.RouterView
        >) = {}
      }
      if (
        typeof __VLS_styleScopedClasses === 'object' &&
        !Array.isArray(__VLS_styleScopedClasses)
      ) {
        __VLS_styleScopedClasses['header-wrapper']
        __VLS_styleScopedClasses['logo']
        __VLS_styleScopedClasses['wrapper']
      }
      declare var __VLS_slots: {}
      return __VLS_slots
    }
    const __VLS_internalComponent = (await import('vue')).defineComponent({
      setup() {
        return {
          RouterLink: RouterLink,
          RouterView: RouterView,
          HelloWorld: HelloWorld
        }
      }
    })
    return {} as typeof __VLS_publicComponent
  }
  return {} as typeof __VLS_setup extends () => Promise<infer T> ? T : never
})({} as any)
