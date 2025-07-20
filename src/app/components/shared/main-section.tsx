export default function MainSection({children}:{children:React.ReactNode}) {
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 md:min-h-screen gap-8 px-4 md:px-0">
            {children}
        </div>
    )
}