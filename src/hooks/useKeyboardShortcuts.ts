import { useEffect } from 'react'

export const useKeyboardShortcuts = (shortcuts: Record<string, () => void>) => {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const shortcut = shortcuts[e.key.toLowerCase()]
            if (shortcut) {
                shortcut()
            }
        }

        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    })
}
