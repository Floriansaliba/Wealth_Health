// actions

export const SUBMIT_FORM = "Submit form and save employee profile in the state";
export const NUMBER_OF_ENTRIES =
  "Save the number of entries selected by user in the state";
export const PREVIOUS_PAGE = "Go to previous page view";
export const NEXT_PAGE = "Go to next page view";
export const GET_MAX_PAGE = "Save the maximum number of pages";
export const SAVE_SEARCH = "Save the search input in the state";
export const SORT_BY_FIRST_NAME = "Sort employees by first name";
export const SORT_BY_LAST_NAME = "Sort employees by last name";
export const SORT_BY_DEPARTMENT = "Sort employees by department";
export const SORT_BY_STREET = "Sort employees by street";
export const SORT_BY_CITY = "Sort employees by city";
export const SORT_BY_STATE = "Sort employees by state";
export const SORT_BY_ZIP_CODE = "Sort employees by zip-code";
export const SORT_BY_BIRTH_DATE = "Sort employees by birth date";
export const SORT_BY_START_DATE = "Sort employees by starting date";
export const FILTER = "Filter employees depending on the search input";
export const SAVE_HISTORY = "Save emplees list in history";
export const SHOW_MODAL = "display modal";
export const HIDE_MODAL = "hide modal";

// actions creators

export const submitForm = (
  firstName,
  lastName,
  birthDate,
  startDate,
  street,
  city,
  state,
  zipCode,
  department
) => ({
  type: SUBMIT_FORM,
  payload: {
    firstName: firstName,
    lastName: lastName,
    birthDate: birthDate,
    startDate: startDate,
    street: street,
    city: city,
    state: state,
    zipCode: zipCode,
    department: department,
  },
});

export const numberOfEntries = (selectedNumber) => ({
  type: NUMBER_OF_ENTRIES,
  payload: { selectedNumber: selectedNumber },
});

export const previousPage = () => ({
  type: PREVIOUS_PAGE,
});

export const nextPage = () => ({
  type: NEXT_PAGE,
});

export const getMaxPage = (maxPages) => ({
  type: GET_MAX_PAGE,
  payload: { maxPages: maxPages },
});

export const saveSearch = (search) => ({
  type: SAVE_SEARCH,
  payload: { search: search },
});

export const sortByFirstName = (direction) => ({
  type: SORT_BY_FIRST_NAME,
  payload: { direction: direction },
});

export const sortByLastName = (direction) => ({
  type: SORT_BY_LAST_NAME,
  payload: { direction: direction },
});

export const sortByDepartment = (direction) => ({
  type: SORT_BY_DEPARTMENT,
  payload: { direction: direction },
});

export const sortByStreet = (direction) => ({
  type: SORT_BY_STREET,
  payload: { direction: direction },
});

export const sortByCity = (direction) => ({
  type: SORT_BY_CITY,
  payload: { direction: direction },
});

export const sortByState = (direction) => ({
  type: SORT_BY_STATE,
  payload: { direction: direction },
});

export const sortByZipCode = (direction) => ({
  type: SORT_BY_ZIP_CODE,
  payload: { direction: direction },
});

export const sortByBirthDate = (direction) => ({
  type: SORT_BY_BIRTH_DATE,
  payload: { direction: direction },
});

export const sortByStartDate = (direction) => ({
  type: SORT_BY_START_DATE,
  payload: { direction: direction },
});

export const filter = (inputValue) => ({
  type: FILTER,
  payload: { inputValue: inputValue },
});

export const saveHistory = () => ({
  type: SAVE_HISTORY,
});

export const showModal = () => ({
  type: SHOW_MODAL,
});

export const hideModal = () => ({
  type: HIDE_MODAL,
});
