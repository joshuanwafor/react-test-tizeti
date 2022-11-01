import { throws } from "assert";
import { makeAutoObservable, runInAction } from "mobx";

class DataStore {
  residentsList: any[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  addToList = (student: any) => {
    // console.log("student already exist in list");
    // if (this.residentsList.find((e) => e.name == student.name)) {
    //   return;
    // }
    runInAction(() => {
      this.residentsList = [...this.residentsList, student];
    });
  };
}

class ErrorStore {
  error: string = "Error Message";
  constructor() {
    makeAutoObservable(this);
  }

  showError(error: string) {
    runInAction(() => {
      this.error = error;
    });
  }
}

export const errorStore = new ErrorStore();
export const dataStore = new DataStore();
