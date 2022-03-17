import TyhButton from '../packages/button'
import TyhList from '../packages/list'
import TyhCard from '../packages/card'
import TyhTag from '../packages/tag'
import TyhLink from '../packages/link'
import TyhMenu from '../packages/menu'
import TyhMenuItem from '../packages/menu-item'
import TyhDivision from '../packages/division'
import TyhIcon from '../packages/icon'
import TyhCrumbs from '../packages/crumbs'
import TyhCrumbsItem from '../packages/crumbs-item'
import TyhInput from '../packages/input'
import TyhTurnPage from '../packages/turn-page'
import TyhTurnPageItem from '../packages/turn-page-item'
import TyhBackTop from '../packages/back-top'
import TyhSkeleton from '../packages/skeleton'
import TyhAlert from '../packages/alert'
import TyhRate from '../packages/rate'
import TyhImage from '../packages/image'
import TyhAvatar from '../packages/avatar'
import TyhAside from '../packages/container/TyhAside'
import TyhContainer from '../packages/container/TyhContainer'
import TyhFooter from '../packages/container/TyhFooter'
import TyhHeader from '../packages/container/TyhHeader'
import TyhMain from '../packages/container/TyhMain'
import TyhText from '../packages/text'
import TyhTable from '../packages/table'
import TyhButtonGroup from '../packages/button-group'
import TyhCalendar from '../packages/calendar'
import TyhSwitch from '../packages/switch'
import TyhRadio from '../packages/radio'
import TyhTree from '../packages/tree'
import TyhPageHeader from '../packages/page-header'
import TyhInfo from '../packages/info'
import TyhTextarea from '../packages/textarea'
import TyhSelect from '../packages/select'
import TyhOption from '../packages/option'
import TyhTagging from '../packages/tagging'
import TyhDrawer from '../packages/drawer'
import TyhDialog from '../packages/dialog'
import { Message } from '../packages/message'
import { Notification } from '../packages/notification'
import { version } from './package.json'

const cpm = [
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

const install = _ => {
  cpm.forEach(i => {
    _.use(i)
  })
}

const T = {
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

export default T
