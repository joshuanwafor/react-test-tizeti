import { observer } from "mobx-react-lite";
import React from "react";
import { errorStore } from "../store";

function Error() {
  return (
    <div data-testid="errorMsg" className="alert error mt-20 slide-up-fade-in">{errorStore.error}</div>
  );
}

export default observer(Error);
