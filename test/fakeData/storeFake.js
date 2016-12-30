export const storeFake = (state) => {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => {
      return { ...state }
    }
  }
}
