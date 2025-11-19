import { Button } from '@/components/ui/button'
import logo from '@/assets/logo.webp'

const NavigationLogo = () => {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <Button asChild variant="ghost" className="px-0 sm:px-4 h-fit">
            <div title="Back to the the Top" onClick={handleScrollToTop}>
                <img
                    src={logo}
                    width={48}
                    height={48}
                    className="rounded-lg"
                    loading="lazy"
                />
                <span className="text-large">Infinite Scroll Feed</span>
            </div>
        </Button>
    )
}

export default NavigationLogo
