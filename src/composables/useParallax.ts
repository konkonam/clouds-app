import { useWindowScroll, useWindowSize } from '@vueuse/core'
import type { Ref } from 'vue'

export type ParallaxOptions = {
    target: Ref<HTMLElement | undefined>
    by: number
    container?: Ref<HTMLElement>
    bounding?: ReturnType<typeof useWindowSize> | undefined
}

export const useParallax = (...options: ParallaxOptions[]) => {
    const { y: windowScrollY } = useWindowScroll()
    const { height: windowHeight } = useWindowSize()
    const factor = ref<number>(0)

    onMounted(() => {
        watch(windowScrollY, (value) => {
            options?.forEach((option) => {
                if (!option.target.value) return

                const from = !option.container ? value : (value - option.container.value.offsetHeight)

                const procent = from / (document?.body.offsetHeight - windowHeight.value) * 100
                factor.value = procent * 0.01

                console.log(procent)
                console.log(factor.value)
                option.target.value.style.transform = `translateY(${option.by * factor.value}px, 0, 0)`
            })
        })
    })

    return {
        factor,
    }
}
