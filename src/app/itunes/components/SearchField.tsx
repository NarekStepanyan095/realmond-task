type TSearchFieldProps = {
    handleSearchChange: (search: string) => void
}

export default function SearchField({ handleSearchChange }: TSearchFieldProps) {
    return (
        <input
            className="sticky top-20 rounded-8 w-full border-solid border-2 border-indigo-600 focus:outline-none p-6 z-20"
            onChange={({ target: { value } }) => handleSearchChange(value)}
        />
    );
}
