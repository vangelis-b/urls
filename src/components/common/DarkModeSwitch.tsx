import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import {IconButton, Tooltip, useColorMode, useColorModeValue} from '@chakra-ui/react'
import capitalizeFirstChar from '../../utils/capitalizeFirstChar'

const DarkModeSwitch = (): JSX.Element => {
  const {toggleColorMode} = useColorMode()
  const nextColorModeLabel = useColorModeValue('dark', 'light')
  const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

  const label = `Switch to ${nextColorModeLabel} mode`

  return (
    <Tooltip label={label} openDelay={500}>
      <IconButton
        aria-label={label}
        data-splitbee-event-mode={capitalizeFirstChar(nextColorModeLabel)}
        data-splitbee-event="Toggle Dark Mode"
        icon={<SwitchIcon />}
        onClick={toggleColorMode}
        size="sm"
      />
    </Tooltip>
  )
}

export default DarkModeSwitch
