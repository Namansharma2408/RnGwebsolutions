
const Logo = () => {
    return (
        <div className='w-full max-w-[600px] sm:max-w-[500px] md:max-w-[600px]'>
            <svg width="100%" height="auto" viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
                <text
                    x="50"
                    y="30"
                    className="fill-foreground"
                    fontFamily="Arial, sans-serif"
                    fontSize="24"
                    fontWeight="normal"
                >
                    R&amp;G
                </text>

                <text
                    x="110"
                    y="30"
                    className="fill-sky"
                    fontFamily="Arial, sans-serif"
                    fontSize="24"
                >
                    Web
                </text>

                <text
                    x="105"
                    y="45"
                    className="fill-foreground"
                    fontFamily="Arial, sans-serif"
                    fontSize="11"
                    letterSpacing="3px"
                    textAnchor="middle"
                >
                    Solutions
                </text>

            </svg>
        </div>

    )
}

export { Logo }