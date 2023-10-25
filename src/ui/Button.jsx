import { Link } from "react-router-dom"

function Button({ children, disabled, to, type, onClick }) {
    const base = "bg-yellow-400 text-sm focus:ring active:bg-slate-400 focus:ring-yellow-300 focus:ring-offset-2 focus:bg-yellow-300 tracking-wide transition-colors duration-300 rounded-full uppercase font-semibold text-stone-800  inline-block hover:bg-yellow-300 disabled:cursor-not-allowed"
    const style = {
        primary: base + " px-4 py-3 sm:px-6 sm:py-4",
        small: base + " px-4 py-2 md:px-5 md:py-2.5 text-sm",
        secondary: " py-2.5 text-sm  px-4 border-2 border-stone-300 focus:ring active:bg-slate-400 focus:ring-stone-200 focus:ring-offset-2 focus:bg-yellow-300 tracking-wide transition-colors duration-300 rounded-full uppercase font-semibold text-stone-300  inline-block hover:text-stone-800 hover:bg-stone-300  disabled:cursor-not-allowed"
    }

    if (to) return <Link to={to} className={style[type]} >
        {children}
    </Link>

    if (onClick) return (
        <button disabled={disabled} onClick={onClick} className={style[type]}>
            {children}
        </button>
    )

    return (
        <button disabled={disabled} className={style[type]}>
            {children}
        </button>
    )
}

export default Button
