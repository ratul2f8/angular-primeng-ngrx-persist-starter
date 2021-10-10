import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "./app.state";
import { tutorialReducer } from "./reducers/tutorial.reducer";

export const reducers: ActionReducerMap<IAppState, any> = {
    tutorials: tutorialReducer
}