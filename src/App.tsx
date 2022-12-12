import { Provider } from "react-redux"
import rootStore from "./redux-stores"
import MainNavigateContainer from "./navigations/MainNavigateContainer";


function App() {
  return (
    <Provider store={rootStore}>
      <MainNavigateContainer />
    </Provider>
  )
};

export default App;