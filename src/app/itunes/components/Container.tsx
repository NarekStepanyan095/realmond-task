import { type ReactNode } from "react";

type ContainerProps = {
    isEmptyResult: boolean,
    isSearchEmpty: boolean,
    children: ReactNode
};

export default function Container({ isEmptyResult, isSearchEmpty, children }: ContainerProps) {
    return (
        <div className="flex flex-wrap gap-30 pt-24 justify-center items-center h-full">
            {isEmptyResult &&
                <h1>No item found.</h1>
            }
            {isSearchEmpty &&
                <h1>Type to get what are you looking for.</h1>
            }
            {children}
        </div>
    );
}
