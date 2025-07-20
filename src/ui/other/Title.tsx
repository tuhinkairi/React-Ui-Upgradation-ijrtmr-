export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-2xl sm:text-3xl 2xl:text-[2.35rem] font-bold  my-4 col-span-4 text-dark">
            {children}
        </h1>

    )
}
