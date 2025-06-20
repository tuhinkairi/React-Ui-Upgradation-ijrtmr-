export default function Title({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="text-3xl font-bold  my-4 col-span-4">
            {children}
        </h2>

    )
}
