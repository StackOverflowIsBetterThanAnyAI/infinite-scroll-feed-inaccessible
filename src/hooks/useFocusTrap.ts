import { useEffect } from 'react'

const zigzagArray = (focusableElements: HTMLButtonElement[]) => {
    const array = []

    for (let i = 0; i < focusableElements.length; i += 2) {
        array.push(focusableElements[i])
        if (focusableElements[i + 2]) {
            array.push(focusableElements[i + 2])
        }
        if (focusableElements[i + 1]) {
            array.push(focusableElements[i + 1])
        }
    }

    return [...new Set(array)]
}

export const useFocusTrap = () => {
    useEffect(() => {
        const focusTrap = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') {
                return
            }

            const focusableElements = (
                Array.from(
                    document.querySelectorAll('a, button')
                ) as HTMLButtonElement[]
            ).filter((item) => !item.disabled)

            const zigzagArrayElements = zigzagArray(focusableElements)

            const firstFocusableElement = zigzagArrayElements[0]
            const lastFocusableElement = zigzagArrayElements.at(-1)

            const currentIndex = zigzagArrayElements.indexOf(
                document.activeElement as HTMLButtonElement
            )

            e.preventDefault()

            if (e.shiftKey) {
                if (document.activeElement === firstFocusableElement) {
                    lastFocusableElement?.focus()
                } else {
                    zigzagArrayElements[currentIndex - 1]?.focus()
                }
            } else {
                if (document.activeElement === lastFocusableElement) {
                    firstFocusableElement?.focus()
                } else {
                    zigzagArrayElements[currentIndex + 1]?.focus()
                }
            }
        }

        document.addEventListener('keydown', focusTrap)

        return () => {
            document.removeEventListener('keydown', focusTrap)
        }
    })
}
