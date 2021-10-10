import { IInitialTutorialsState } from "./reducers/tutorial.reducer";

export interface IAppState{
    readonly tutorials: IInitialTutorialsState
}