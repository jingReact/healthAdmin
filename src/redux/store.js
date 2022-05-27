import { createStore } from "redux";
import redurces from './redurces'
const configureStore = () => createStore(redurces)
export default configureStore;