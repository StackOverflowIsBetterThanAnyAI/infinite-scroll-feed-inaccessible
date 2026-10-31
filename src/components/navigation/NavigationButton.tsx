import { Button } from '@/components/ui/button'

type NavigationButtonProps = {
    handleScroll: () => void
    label: string
    variant: 'secondary' | 'ghost'
}

const NavigationButton = ({
    handleScroll,
    label,
    variant,
}: NavigationButtonProps) => {
    return (
        <Button asChild variant={variant} className="px-2 navigation-button">
            <button
                className="text-large"
                title={`Scroll to ${label}`}
                aria-label="Scroll down"
                onPointerDown={handleScroll}
                onClick={(e) => {
                    if (e.detail === 0) {
                        handleScroll()
                    }
                }}
            >
                {label}
            </button>
        </Button>
    )
}

export default NavigationButton
