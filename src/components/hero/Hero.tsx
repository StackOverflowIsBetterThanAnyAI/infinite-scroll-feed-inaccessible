import { useContext } from 'react'
import heroLogo from '@/assets/hero_logo.webp'
import { Button } from '@/components/ui/button'
import { ContextTopUsers } from '@/context/ContextTopUsers'
import { setWindowScrollTo } from '@/utils/setWindowScrollTo'

const Hero = () => {
    const contextTopUsers = useContext(ContextTopUsers)
    if (!contextTopUsers) {
        throw new Error('Hero must be used within a ContextTopUsers.Provider')
    }
    const topTenUsers = contextTopUsers

    const handleScrollToTopUsers = () => {
        setWindowScrollTo(64, topTenUsers)
    }

    return (
        <section className="w-full flex flex-col items-center gap-8 max-w-7xl bg-stone-100 text-stone-950 p-3 sm:p-4 lg:p-6 my-6 lg:my-8">
            <h1 className="text-extremely-large font-mono font-semibold">
                Infinite Scroll Feed
            </h1>
            <div className="flex justify-center gap-16 text-normal">
                <div className="max-w-xl">
                    <p className="pb-4 border-b-2 border-stone-400 leading-7 lg:leading-8">
                        This website serves as a{' '}
                        <strong className="font-mono px-0.5 text-large">
                            Landing Page
                        </strong>{' '}
                        for implementing an infinite scroll feed based on fake
                        API data from
                        <Button asChild variant="link">
                            <a
                                href="https://jsonplaceholder.typicode.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-normal"
                                aria-label="Link to JSON Placeholder (opens in a new tab)"
                                title="Link to JSON Placeholder (opens in a new tab)"
                            >
                                JSON Placeholder
                            </a>
                        </Button>{' '}
                        and{' '}
                        <Button asChild variant="link">
                            <a
                                href="https://fakerjs.dev/api/company.html"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-normal"
                                aria-label="Link to Faker (opens in a new tab)"
                                title="Link to Faker (opens in a new tab)"
                            >
                                Faker
                            </a>
                        </Button>
                        , logos from
                        <Button asChild variant="link">
                            <a
                                href="https://logoipsum.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-normal"
                                aria-label="Link to Logoipsum (opens in a new tab)"
                                title="Link to Logoipsum (opens in a new tab)"
                            >
                                Logoipsum
                            </a>
                        </Button>
                        , and uses UI elements from the React component library
                        <Button asChild variant="link">
                            <a
                                href="https://ui.shadcn.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline text-normal"
                                aria-label="Link to shadcn (opens in a new tab)"
                                title="Link to shadcn (opens in a new tab)"
                            >
                                shadcn
                            </a>
                        </Button>
                    </p>
                    <p className="py-4 border-b-2 border-stone-400 leading-7 lg:leading-8">
                        It makes use of the{' '}
                        <strong className="font-mono px-0.5 text-large">
                            /comments
                        </strong>
                        ,{' '}
                        <strong className="font-mono px-0.5 text-large">
                            /posts
                        </strong>{' '}
                        and{' '}
                        <strong className="font-mono px-0.5 text-large">
                            /users
                        </strong>{' '}
                        routes from JSON Placeholder to fetch and display
                        comments, and the quote of the day, along with user
                        information in a card format.
                    </p>
                    <p className="text-center p-4 mt-6 outline-4 outline-stone-400/60  rounded-lg">
                        Check out the most active users of the past week right
                        now!
                        <Button
                            asChild
                            variant="outline"
                            className="flex m-auto mt-4 px-8 w-fit"
                        >
                            <button
                                className="text-normal"
                                title="Scroll to the most active users"
                                onClick={handleScrollToTopUsers}
                            >
                                Most Active Users
                            </button>
                        </Button>
                    </p>
                </div>
                <div className="hidden min-[864px]:flex flex-col gap-2 self-center justify-center items-center p-4 h-fit bg-stone-400/60  outline-4 outline-stone-600 rounded-lg">
                    <img
                        src={heroLogo}
                        width={192}
                        height={192}
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero
