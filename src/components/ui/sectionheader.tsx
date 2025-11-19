type SectionHeaderProps = {
    className?: string
    children: string
}

export const SectionHeader = ({ className, children }: SectionHeaderProps) => {
    return (
        <div
            className={`self-start text-very-large font-semibold underline ${className}`}
        >
            {children}
        </div>
    )
}
