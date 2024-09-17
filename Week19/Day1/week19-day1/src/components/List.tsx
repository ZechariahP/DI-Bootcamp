import { ReactElement, ReactNode } from 'react';

interface ListProps<T> {
   items: T[];
};

//const List = <T, >({ items }: ListProps<T>): ReactElement => {
function List<T>({ items }: ListProps<T>): ReactElement {
    return (
            <>
                <h1>List of:</h1>
                {items.map((item, i) => (
                   <div key={i}>{item as ReactNode}</div>
                ))}
            </>
        );
};

export default List;