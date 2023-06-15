const Container = ({ children }) => {
    return <div className="w-full">
        <div className="grid place-items-center">
            <div className="w-full max-w-5xl">{children}</div>
        </div>
    </div>
}
export default Container