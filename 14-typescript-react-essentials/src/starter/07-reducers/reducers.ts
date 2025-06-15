export type CounterState = {
  count: number;
  status: string;
};

export const initialState: CounterState = {
  count: 0,
  status: "Pending",
};

type UpdateAccountAction = {
  type: "increament" | "decrement" | "reset";
};

type SetStatusAction = {
  type: "setStatus";
  payload: "active" | "inactive";
};

type CounterAction = UpdateAccountAction | SetStatusAction;

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "increament":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case "reset":
      return { ...state, count: 0 };
    case "setStatus":
      return { ...state, status: action.payload };
    default:
      const unhandleActionType: never = action;
      throw new Error(
        `Unexperted action type: ${unhandleActionType}. Please double check the counter reducer`
      );
    //   return state;
  }
};
