import { dataStore, errorStore } from "./store";
import { STUDENTS } from "./studentsList";

export function useStudentHook() {
  function checkValidity(student: any, joinDate: any) {
    const now = new Date();
    // studentJoin date should be less than student validity date;
    if ( new Date(joinDate)>new Date(student.validityDate)) {
      return false;
    } else {
      return true;
    }
  }

  function findUserByName(term: string) {
    let student = STUDENTS.find((element) => {
      if (term.toLocaleLowerCase() == element.name.toLocaleLowerCase()) {
        return true;
      }
    });
    console.log(student, " found student ");
    return student;
  }

  function addToResidentList(term: string, joinDate: any) {
    // check if user exists
    const user = findUserByName(term);

    if (user == undefined) {
      errorStore.showError(`Sorry, ${term} is not a verified student!`);
      return;
    }

    // check if entry date is valid
    const isValid = checkValidity(user, joinDate);

    if (isValid == false) {
      errorStore.showError(`Sorry, ${user.name}'s validity has Expired!`);
      return;
    }

    // add to list
    dataStore.addToList(user);
  }

  return { addToResidentList };
}
