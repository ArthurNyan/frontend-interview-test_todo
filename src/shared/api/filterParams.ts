import { CategoriesState } from "../lib/CategoriesState";

export const filterParams = (searchText: string, listOfCars: CategoriesState[]) => {
    if (!searchText) {
        return listOfCars;
    }
    return listOfCars.filter(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
    );
}
