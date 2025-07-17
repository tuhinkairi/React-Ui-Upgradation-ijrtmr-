export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl font-bold  my-4 col-span-4 text-dark">
            {children}
        </h1>

    )
}
