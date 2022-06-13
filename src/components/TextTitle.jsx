
const TextTitle = ({
    prevTitle,
    title,
    highlightTitle,
    colorText,
    className,
    space,
}) => {
    return (
        <p className={`font-semibold text-4xl space-x-2 pt-5 ${className}`}>
            {prevTitle ? <span className={`${colorText}`}>{prevTitle}</span> : null}
            <span>{title}</span>
            {highlightTitle ? <span className={`${colorText}`}>{highlightTitle}</span> : null}
        </p>
    )
}

export default TextTitle ;