import { Link } from "react-router-dom"

function Button({children, disabled, to}) { 
    const className = "bg-yellow-400 focus:ring active:bg-slate-400 focus:ring-yellow-300 focus:ring-offset-2 focus:bg-yellow-300 tracking-wide transition-colors duration-300 rounded-full uppercase font-semibold text-stone-800  px-4 py-3 inline-block hover:bg-yellow-300 disabled:cursor-not-allowed"

    if(to) return <Link to={to} className={className} >
        {children}
    </Link>
    return (
        <button disabled={disabled}  className={className}>
            {children}
            </button>
    )
}

export default Button
