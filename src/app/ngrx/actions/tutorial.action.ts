import { Action } from "@ngrx/store";
import { Tutorial } from "../models/Tutorial";

export enum ETutorialActions{
    ADD = "[TUTORIAL] ADD",
    REMOVE = "[TUTORIAL] REMOVE"
}

export class AddTutorial implements Action{
    readonly type = ETutorialActions.ADD;
    constructor(public payload: Tutorial){

    }

}

export class RemoveTutorial implements Action{
    readonly type = ETutorialActions.REMOVE;
    constructor(public payload: number){

    }
}

export  type TTutorialActions = AddTutorial|RemoveTutorial;