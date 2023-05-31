import userStore from './modules/user'
import useNavBar from './modules/navBar'
const useStore = () => ({
  user: userStore(),
  navBar: useNavBar(),
})

export default useStore
