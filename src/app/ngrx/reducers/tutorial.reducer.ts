import { ETutorialActions, TTutorialActions } from '../actions/tutorial.action';

import { Tutorial } from '../models/Tutorial';

export interface IInitialTutorialsState {
  data: Tutorial[];
}

const initialState: IInitialTutorialsState = {
  data: [
    {
      name: 'NgRx Tutorial',
      url: 'https://www.udemy.com',
      imageUrl: "https://user-images.githubusercontent.com/1699357/98168675-388f5f00-1eeb-11eb-85ca-9176b6cf651a.png",
      description: "Powered by Udemy"
    },
    {
      name: 'Angular Tutorial',
      url: 'https://www.udemy.com',
      imageUrl: "https://miro.medium.com/max/2000/1*fKb9TdxSYjVzWindUWaGUg.png",
      description: "Powered by Udemy"
    },
    {
      name: 'TypeScript Tutorial',
      url: 'https://www.udemy.com',
      imageUrl: "https://pantheon.io/sites/default/files/field/image/TypeScriptImage.jpeg",
      description: "Powered by Udemy"
    },
    {
      name: 'VueJS tutorial',
      url: 'https://www.udemy.com',
      imageUrl: "https://anteelo.com/wp-content/uploads/2021/05/1_7OCwu-TWqVluPMsZdzWKw.png",
      description: "Powered by Udemy"
    },
  ],
};

export function tutorialReducer(
  state: IInitialTutorialsState = initialState,
  action: TTutorialActions
): IInitialTutorialsState {
  switch (action.type) {
    case ETutorialActions.ADD:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case ETutorialActions.REMOVE:
      return {
        ...state,
        data: state.data.filter((el, index) => index !== action.payload)
      }  
    default:
      return state;
  }
}
