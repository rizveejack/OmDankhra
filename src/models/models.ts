export interface GlobalState {
    togggleMenu: boolean,
    toggleExplore: boolean,
    setToggleMenu: (x: boolean) => void,
    setExplore: (x: boolean) => void
}