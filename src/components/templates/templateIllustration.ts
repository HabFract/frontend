// #region Local Imports
import Blockchain from '../../assets/svg/Light/Scenes/Blockchain.svg'
import BlockchainDark from '../../assets/svg/Dark/Scenes/Blockchain.svg'
import LifeManagement from '../../assets/svg/Light/Scenes/LifeManagement.svg'
import LifeManagementDark from '../../assets/svg/Dark/Scenes/LifeManagement.svg'
import Media from '../../assets/svg/Light/Scenes/Media.svg'
import MediaDark from '../../assets/svg/Dark/Scenes/Media.svg'
import RemoteLife from '../../assets/svg/Light/Scenes/RemoteLife.svg'
import RemoteLifeDark from '../../assets/svg/Dark/Scenes/RemoteLife.svg'
import Communication from '../../assets/svg/Light/Scenes/Communication.svg'
import CommunicationDark from '../../assets/svg/Dark/Scenes/Communication.svg'
import VirtualReality from '../../assets/svg/Light/Scenes/VirtualReality.svg'
import VirtualRealityDark from '../../assets/svg/Dark/Scenes/VirtualReality.svg'

import Mountains from '../../assets/svg/General/Stickers/Mountains.svg'
import Rockies from '../../assets/svg/General/Stickers/Rockies.svg'
import Moving from '../../assets/svg/General/Stickers/Moving.svg'
import ScheduleMeeting from '../../assets/svg/General/Stickers/ScheduleMeeting.svg'
// #endregion Local Imports

export function getIllustration(num: number, light: boolean) {
  switch (num) {
    case 1:
      return light ? Blockchain : BlockchainDark
    case 2:
      return light ? LifeManagement : LifeManagementDark
    case 3:
      return light ? RemoteLife : RemoteLifeDark
    case 4:
      return light ? Communication : CommunicationDark
    case 5:
      return light ? Media : MediaDark
    case 6:
      return light ? VirtualReality : VirtualRealityDark
    case 7:
      return Rockies
    case 8:
      return Moving
    case 9:
      return ScheduleMeeting
    case 0:
      return Mountains
    default:
      return ''
  }
}
