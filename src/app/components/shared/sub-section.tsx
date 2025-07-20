export default function SubSection({children}:{children:React.ReactNode}) {
    return(
        <div className="flex flex-col gap-12 p-4 md:p-0 max-w-7xl md:mx-auto">
            {children}
        </div>
    )
}