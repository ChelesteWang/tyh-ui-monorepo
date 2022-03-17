import TyhButton from '../components/button'
import TyhList from '../components/list'
import TyhCard from '../components/card'
import TyhTag from '../components/tag'
import TyhLink from '../components/link'
import TyhMenu from '../components/menu'
import TyhMenuItem from '../components/menu-item'
import TyhDivision from '../components/division'
import TyhIcon from '../components/icon'
import TyhCrumbs from '../components/crumbs'
import TyhCrumbsItem from '../components/crumbs-item'
import TyhInput from '../components/input'
import TyhTurnPage from '../components/turn-page'
import TyhTurnPageItem from '../components/turn-page-item'
import TyhBackTop from '../components/back-top'
import TyhSkeleton from '../components/skeleton'
import TyhAlert from '../components/alert'
import TyhRate from '../components/rate'
import TyhImage from '../components/image'
import TyhAvatar from '../components/avatar'
import TyhAside from '../components/container/TyhAside'
import TyhContainer from '../components/container/TyhContainer'
import TyhFooter from '../components/container/TyhFooter'
import TyhHeader from '../components/container/TyhHeader'
import TyhMain from '../components/container/TyhMain'
import TyhText from '../components/text'
import TyhTable from '../components/table'
import TyhButtonGroup from '../components/button-group'
import TyhCalendar from '../components/calendar'
import TyhSwitch from '../components/switch'
import TyhRadio from '../components/radio'
import TyhTree from '../components/tree'
import TyhPageHeader from '../components/page-header'
import TyhInfo from '../components/info'
import TyhTextarea from '../components/textarea'
import TyhSelect from '../components/select'
import TyhOption from '../components/option'
import TyhTagging from '../components/tagging'
import TyhDrawer from '../components/drawer'
import TyhDialog from '../components/dialog'
import { Message } from '../components/message'
import { Notification } from '../components/notification'
import { version } from './package.json'

const components = [
  TyhButton,
  TyhList,
  TyhCard,
  TyhTag,
  TyhLink,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhIcon,
  TyhCrumbs,
  TyhCrumbsItem,
  TyhInput,
  TyhTurnPage,
  TyhTurnPageItem,
  TyhBackTop,
  TyhSkeleton,
  TyhAlert,
  TyhRate,
  TyhImage,
  TyhAvatar,
  TyhAside,
  TyhContainer,
  TyhFooter,
  TyhHeader,
  TyhMain,
  TyhText,
  TyhTable,
  TyhButtonGroup,
  TyhCalendar,
  TyhSwitch,
  TyhRadio,
  TyhTree,
  TyhPageHeader,
  TyhInfo,
  TyhTextarea,
  TyhSelect,
  TyhOption,
  TyhTagging,
  TyhDrawer,
  TyhDialog
]

const install = app => {
  components.forEach(component => {
    app.use(component)
  })
}

const tyhUi2 = {
  version,
  install
}

export {
  install,
  Message,
  Notification,
  TyhButton,
  TyhList,
  TyhCard,
  TyhTag,
  TyhLink,
  TyhMenu,
  TyhMenuItem,
  TyhDivision,
  TyhIcon,
  TyhCrumbs,
  TyhCrumbsItem,
  TyhInput,
  TyhTurnPage,
  TyhTurnPageItem,
  TyhBackTop,
  TyhSkeleton,
  TyhAlert,
  TyhRate,
  TyhImage,
  TyhAvatar,
  TyhAside,
  TyhContainer,
  TyhFooter,
  TyhHeader,
  TyhMain,
  TyhText,
  TyhTable,
  TyhButtonGroup,
  TyhCalendar,
  TyhSwitch,
  TyhRadio,
  TyhTree,
  TyhPageHeader,
  TyhInfo,
  TyhTextarea,
  TyhSelect,
  TyhOption,
  TyhTagging,
  TyhDrawer,
  TyhDialog
}

export default tyhUi2
