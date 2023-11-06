import { CategoriesState } from "../../app/store/categoriesSlice";

export const filterParams = (searchText: string, listOfCars: CategoriesState[]) => {
    if (!searchText) {
        return listOfCars;
    }
    return listOfCars.filter(({ name }) =>
        name.toLowerCase().includes(searchText.toLowerCase())
    );
}
