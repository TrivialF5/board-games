
const TextTitle = ({
    prevTitle,
    title,
    highlightTitle,
    colorText,
    className,
}) => {
    return (
        <p className={`font-semibold text-4xl ${className}`}>
            {prevTitle ? <span className={`${colorText}`}>{prevTitle}</span> : null}
            <span>{title}</span>
            {highlightTitle ? <span className={`${colorText}`}>{highlightTitle}</span> : null}
        </p>
    )
}

export default TextTitle