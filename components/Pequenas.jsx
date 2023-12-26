export default function Pequenas() {
    return (
        <>
        
        <div className="bg-white grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-8 pt-18 h-64" style={{ display: "flex", justifyContent: "center" }}>
        
        <div className="h-full rounded-lg" style={{ display: "flex", alignItems: "center" }}>

        <article
            className="hover:animate-background rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
            >
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Noticia recente aq ou algo assim
                </h3>
                </a>

                <div className="mt-4 flex flex-wrap gap-1">
                <span
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                >
                    Tag
                </span>

                <span
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                >
                    Categoria
                </span>
                </div>
            </div>
            </article>

        </div>

        <div className="h-full rounded-lg" style={{ display: "flex", alignItems: "center" }}>

            <article
            className="hover:animate-background rounded-xl bg-gradient-to-r from-gray-300 via-gray-500 to-gray-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
            >
            <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                <time datetime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                    Noticia recente aq ou algo assim
                </h3>
                </a>

                <div className="mt-4 flex flex-wrap gap-1">
                <span
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                >
                    Tag
                </span>

                <span
                    className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
                >
                    Categoria
                </span>
                </div>
            </div>
            </article>

        </div>

        </div>
        
        </>
    )
}