import TyhButton from '@tyh-ui/packages/button'
import TyhList from '@tyh-ui/packages/list'
import TyhCard from '@tyh-ui/packages/card'
import TyhTag from '@tyh-ui/packages/tag'
import TyhLink from '@tyh-ui/packages/link'
import TyhMenu from '@tyh-ui/packages/menu'
import TyhMenuItem from '@tyh-ui/packages/menu-item'
import TyhDivision from '@tyh-ui/packages/division'
import TyhIcon from '@tyh-ui/packages/icon'
import TyhCrumbs from '@tyh-ui/packages/crumbs'
import TyhCrumbsItem from '@tyh-ui/packages/crumbs-item'
import TyhInput from '@tyh-ui/packages/input'
import TyhTurnPage from '@tyh-ui/packages/turn-page'
import TyhTurnPageItem from '@tyh-ui/packages/turn-page-item'
import TyhBackTop from '@tyh-ui/packages/back-top'
import TyhSkeleton from '@tyh-ui/packages/skeleton'
import TyhAlert from '@tyh-ui/packages/alert'
import TyhRate from '@tyh-ui/packages/rate'
import TyhImage from '@tyh-ui/packages/image'
import TyhAvatar from '@tyh-ui/packages/avatar'
import TyhAside from '@tyh-ui/packages/container/TyhAside'
import TyhContainer from '@tyh-ui/packages/container/TyhContainer'
import TyhFooter from '@tyh-ui/packages/container/TyhFooter'
import TyhHeader from '@tyh-ui/packages/container/TyhHeader'
import TyhMain from '@tyh-ui/packages/container/TyhMain'
import TyhText from '@tyh-ui/packages/text'
import TyhTable from '@tyh-ui/packages/table'
import TyhButtonGroup from '@tyh-ui/packages/button-group'
import TyhCalendar from '@tyh-ui/packages/calendar'
import TyhSwitch from '@tyh-ui/packages/switch'
import TyhRadio from '@tyh-ui/packages/radio'
import TyhTree from '@tyh-ui/packages/tree'
import TyhPageHeader from '@tyh-ui/packages/page-header'
import TyhInfo from '@tyh-ui/packages/info'
import TyhTextarea from '@tyh-ui/packages/textarea'
import TyhSelect from '@tyh-ui/packages/select'
import TyhOption from '@tyh-ui/packages/option'
import TyhTagging from '@tyh-ui/packages/tagging'
import TyhDrawer from '@tyh-ui/packages/drawer'
import TyhDialog from '@tyh-ui/packages/dialog'
import { Message } from '@tyh-ui/packages/message'
import { Notification } from '@tyh-ui/packages/notification'
import { version } from '@tyh-ui/package.json'

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
