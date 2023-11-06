import { useEffect, useState } from "react"
import { CategoriesState } from "../../app/store/categoriesSlice"
import { ModalInput } from "../ModalInput"
import { ListItem } from "../../pages/ListItem"
import { filterParams } from "../../shared/lib/filterParams"

export const SearchInput = ({ categories }: { categories: CategoriesState[] }) => {
    const [name, setName] = useState('')
    const [catList, setCatlist] = useState(categories)

    useEffect(() => {
        const Debounce = setTimeout(() => {
            setCatlist(filterParams(name, categories));
        }, 300);

        return () => clearTimeout(Debounce);
    }, [categories, name]);

    return <>
        <div className="sort-container">
            <ModalInput name={name} label="" size="large" setName={setName} />
        </div>
        <ul>
            {catList.map((category) => (
                <ListItem key={category.id} item={category} />
            ))}
        </ul>
    </>
}