import './index.css';

export default function Loader({ isWindowLoad }) {

    return (
        <div className={`fixed ${!isWindowLoad ? "opacity-0 !z-[-1]" : "opacity-100"} left-0 top-0 w-full h-full flex items-center justify-center bg-[var(--primary-color)] z-[9999]`}>

            <div className="loader"></div>

        </div>
    )
}
