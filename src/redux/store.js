import { createStore } from "redux";
import { produce } from "immer";
import {
  NUMBER_OF_ENTRIES,
  PREVIOUS_PAGE,
  NEXT_PAGE,
  GET_MAX_PAGE,
  SAVE_SEARCH,
  SORT_BY_FIRST_NAME,
  SORT_BY_LAST_NAME,
  SORT_BY_DEPARTMENT,
  SORT_BY_STREET,
  SORT_BY_CITY,
  SORT_BY_STATE,
  SORT_BY_ZIP_CODE,
  SORT_BY_BIRTH_DATE,
  SORT_BY_START_DATE,
  FILTER,
  SAVE_HISTORY,
  SUBMIT_FORM,
  SHOW_MODAL,
  HIDE_MODAL,
} from "./actions";

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

// state initial

const initialState = {
  employeeList: [],
  currentPage: 1,
  entries: 10,
  maxPages: 1,
  search: "",
  firstEntry: 1,
  lastEntry: null,
  employeesHistory: [],
  displayModal: false,
};

// Reducer

export function reducer(state = initialState, action) {
  if (action.type === SUBMIT_FORM) {
    return produce(state, (draft) => {
      draft.employeeList.push({
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        startDate: action.payload.startDate,
        department: action.payload.department,
        birthDate: action.payload.birthDate,
        street: action.payload.street,
        city: action.payload.city,
        state: action.payload.state,
        zipCode: action.payload.zipCode,
      });
    });
  }
  if (action.type === NUMBER_OF_ENTRIES) {
    return produce(state, (draft) => {
      draft.entries = action.payload.selectedNumber;
    });
  }
  if (action.type === PREVIOUS_PAGE) {
    return produce(state, (draft) => {
      draft.currentPage === 1 ? (draft.currentPage = 1) : draft.currentPage--;
    });
  }
  if (action.type === NEXT_PAGE) {
    return produce(state, (draft) => {
      if (draft.currentPage <= draft.maxPages - 1) {
        draft.currentPage++;
      }
    });
  }
  if (action.type === GET_MAX_PAGE) {
    return produce(state, (draft) => {
      draft.maxPages = action.payload.maxPages;
    });
  }
  if (action.type === SAVE_SEARCH) {
    return produce(state, (draft) => {
      draft.search = action.payload.search;
    });
  }
  if (action.type === SORT_BY_FIRST_NAME) {
    return produce(state, (draft) => {
      let employeeList = [...draft.employeeList];
      if (action.payload.direction === "<") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return -1;
          }
          if (a.firstName > b.firstName) {
            return 1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
      if (action.payload.direction === ">") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.firstName < b.firstName) {
            return 1;
          }
          if (a.firstName > b.firstName) {
            return -1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
    });
  }
  if (action.type === SORT_BY_LAST_NAME) {
    return produce(state, (draft) => {
      let employeeList = [...draft.employeeList];
      if (action.payload.direction === "<") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.lastName < b.lastName) {
            return -1;
          }
          if (a.lastName > b.lastName) {
            return 1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
      if (action.payload.direction === ">") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.lastName < b.lastName) {
            return 1;
          }
          if (a.lastName > b.lastName) {
            return -1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
    });
  }
  if (action.type === SORT_BY_DEPARTMENT) {
    return produce(state, (draft) => {
      let employeeList = [...draft.employeeList];
      if (action.payload.direction === "<") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.department < b.department) {
            return -1;
          }
          if (a.department > b.department) {
            return 1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
      if (action.payload.direction === ">") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.department < b.department) {
            return 1;
          }
          if (a.department > b.department) {
            return -1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
    });
  }
  if (action.type === SORT_BY_STREET) {
    return produce(state, (draft) => {
      let employeeList = [...draft.employeeList];
      if (action.payload.direction === "<") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.street < b.street) {
            return -1;
          }
          if (a.street > b.street) {
            return 1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
      if (action.payload.direction === ">") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.street < b.street) {
            return 1;
          }
          if (a.street > b.street) {
            return -1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
    });
  }
  if (action.type === SORT_BY_CITY) {
    return produce(state, (draft) => {
      let employeeList = [...draft.employeeList];
      if (action.payload.direction === "<") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.city < b.city) {
            return -1;
          }
          if (a.city > b.city) {
            return 1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
      if (action.payload.direction === ">") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.city < b.city) {
            return 1;
          }
          if (a.city > b.city) {
            return -1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
    });
  }
  if (action.type === SORT_BY_STATE) {
    return produce(state, (draft) => {
      let employeeList = [...draft.employeeList];
      if (action.payload.direction === "<") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.state < b.state) {
            return -1;
          }
          if (a.state > b.state) {
            return 1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
      if (action.payload.direction === ">") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.state < b.state) {
            return 1;
          }
          if (a.state > b.state) {
            return -1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
    });
  }
  if (action.type === SORT_BY_ZIP_CODE) {
    return produce(state, (draft) => {
      let employeeList = [...draft.employeeList];
      if (action.payload.direction === "<") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.zipCode < b.zipCode) {
            return -1;
          }
          if (a.zipCode > b.zipCode) {
            return 1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
      if (action.payload.direction === ">") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          if (a.zipCode < b.zipCode) {
            return 1;
          }
          if (a.zipCode > b.zipCode) {
            return -1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
    });
  }
  if (action.type === SORT_BY_BIRTH_DATE) {
    return produce(state, (draft) => {
      let employeeList = [...draft.employeeList];
      if (action.payload.direction === "<") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          a = Number(a.birthDate.split("-").join(""));
          b = Number(b.birthDate.split("-").join(""));
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
      if (action.payload.direction === ">") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          a = Number(a.birthDate.split("-").join(""));
          b = Number(b.birthDate.split("-").join(""));
          if (a < b) {
            return 1;
          }
          if (a > b) {
            return -1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
    });
  }
  if (action.type === SORT_BY_START_DATE) {
    return produce(state, (draft) => {
      let employeeList = [...draft.employeeList];
      if (action.payload.direction === "<") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          a = Number(a.startDate.split("-").join(""));
          b = Number(b.startDate.split("-").join(""));
          if (a < b) {
            return -1;
          }
          if (a > b) {
            return 1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
      if (action.payload.direction === ">") {
        const sortedEmployees = employeeList.sort(function (a, b) {
          a = Number(a.startDate.split("-").join(""));
          b = Number(b.startDate.split("-").join(""));
          if (a < b) {
            return 1;
          }
          if (a > b) {
            return -1;
          }
          return 0;
        });
        draft.employeeList = sortedEmployees;
      }
    });
  }
  if (action.type === FILTER) {
    return produce(state, (draft) => {
      const input = action.payload.inputValue.toLowerCase();
      let employees = draft.employeeList;
      let history = draft.employeesHistory;
      draft.employeeList = history;
      if (input === "") {
        employees = history;
      } else {
        employees = history;
        console.log(employees);
        const newList = employees.filter((employee) => {
          if (
            employee.firstName.toLowerCase().search(input) !== -1 ||
            employee.lastName.toLowerCase().search(input) !== -1 ||
            employee.startDate.toLowerCase().search(input) !== -1 ||
            employee.department.toLowerCase().search(input) !== -1 ||
            employee.birthDate.toLowerCase().search(input) !== -1 ||
            employee.street.toLowerCase().search(input) !== -1 ||
            employee.city.toLowerCase().search(input) !== -1 ||
            employee.state.toLowerCase().search(input) !== -1 ||
            employee.zipCode.toLowerCase().search(input) !== -1
          ) {
            return employee;
          }
        });
        draft.employeeList = newList;
      }
    });
  }
  if (action.type === SAVE_HISTORY) {
    return produce(state, (draft) => {
      const employees = draft.employeeList;
      draft.employeesHistory = employees;
    });
  }
  if (action.type === SHOW_MODAL) {
    return produce(state, (draft) => {
      draft.displayModal = true;
    });
  }
  if (action.type === HIDE_MODAL) {
    return produce(state, (draft) => {
      draft.displayModal = false;
    });
  }

  return state;
}

// Store

export const store = createStore(reducer, reduxDevtools);
