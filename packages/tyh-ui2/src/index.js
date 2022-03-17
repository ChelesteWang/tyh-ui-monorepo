import TyhButton from '@tyh-ui-monorepo/packages/button'
import TyhList from '@tyh-ui-monorepo/packages/list'
import TyhCard from '@tyh-ui-monorepo/packages/card'
import TyhTag from '@tyh-ui-monorepo/packages/tag'
import TyhLink from '@tyh-ui-monorepo/packages/link'
import TyhMenu from '@tyh-ui-monorepo/packages/menu'
import TyhMenuItem from '@tyh-ui-monorepo/packages/menu-item'
import TyhDivision from '@tyh-ui-monorepo/packages/division'
import TyhIcon from '@tyh-ui-monorepo/packages/icon'
import TyhCrumbs from '@tyh-ui-monorepo/packages/crumbs'
import TyhCrumbsItem from '@tyh-ui-monorepo/packages/crumbs-item'
import TyhInput from '@tyh-ui-monorepo/packages/input'
import TyhTurnPage from '@tyh-ui-monorepo/packages/turn-page'
import TyhTurnPageItem from '@tyh-ui-monorepo/packages/turn-page-item'
import TyhBackTop from '@tyh-ui-monorepo/packages/back-top'
import TyhSkeleton from '@tyh-ui-monorepo/packages/skeleton'
import TyhAlert from '@tyh-ui-monorepo/packages/alert'
import TyhRate from '@tyh-ui-monorepo/packages/rate'
import TyhImage from '@tyh-ui-monorepo/packages/image'
import TyhAvatar from '@tyh-ui-monorepo/packages/avatar'
import TyhAside from '@tyh-ui-monorepo/packages/container/TyhAside'
import TyhContainer from '@tyh-ui-monorepo/packages/container/TyhContainer'
import TyhFooter from '@tyh-ui-monorepo/packages/container/TyhFooter'
import TyhHeader from '@tyh-ui-monorepo/packages/container/TyhHeader'
import TyhMain from '@tyh-ui-monorepo/packages/container/TyhMain'
import TyhText from '@tyh-ui-monorepo/packages/text'
import TyhTable from '@tyh-ui-monorepo/packages/table'
import TyhButtonGroup from '@tyh-ui-monorepo/packages/button-group'
import TyhCalendar from '@tyh-ui-monorepo/packages/calendar'
import TyhSwitch from '@tyh-ui-monorepo/packages/switch'
import TyhRadio from '@tyh-ui-monorepo/packages/radio'
import TyhTree from '@tyh-ui-monorepo/packages/tree'
import TyhPageHeader from '@tyh-ui-monorepo/packages/page-header'
import TyhInfo from '@tyh-ui-monorepo/packages/info'
import TyhTextarea from '@tyh-ui-monorepo/packages/textarea'
import TyhSelect from '@tyh-ui-monorepo/packages/select'
import TyhOption from '@tyh-ui-monorepo/packages/option'
import TyhTagging from '@tyh-ui-monorepo/packages/tagging'
import TyhDrawer from '@tyh-ui-monorepo/packages/drawer'
import TyhDialog from '@tyh-ui-monorepo/packages/dialog'
import { Message } from '@tyh-ui-monorepo/packages/message'
import { Notification } from '@tyh-ui-monorepo/packages/notification'
import { version } from '@tyh-ui-monorepo/package.json'

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
