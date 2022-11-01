import { observer } from "mobx-react";
import React from "react";
import { dataStore } from "../store";

function ResidentsList() {
  return (
    <div className="pa-10 mt-10 w-75">
      <div className="font-weight-bold text-center">Residents List</div>
      <ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
        {dataStore.residentsList.map((element, index) => {
          return (
            <li key={`item${index+1}`} className="slide-up-fade-in">
              {element.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default observer(ResidentsList);
