
const Logo = () => {
    return (
        <div className='w-fit h-auto'>
            <svg width="180" height="60" viewBox="0 0 180 60" xmlns="http://www.w3.org/2000/svg" >
                <text
                    x="10"
                    y="30"
                    className="fill-foreground"
                    fontFamily="Arial, sans-serif"
                    fontSize="24"
                    fontWeight="normal"
                >
                    R&amp;G
                </text>

                <text
                    x="70"
                    y="30"
                    className="fill-sky"
                    fontFamily="Arial, sans-serif"
                    fontSize="24"
                >
                    Web
                </text>

                <text
                    x="65"
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