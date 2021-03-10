import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import {IconButton, Tooltip, useColorMode} from '@chakra-ui/react'

const SWITCH_TO_DARK_MODE = 'Switch to dark mode'
const SWITCH_TO_LIGHT_MODE = 'Switch to light mode'

const DarkModeSwitch = (): JSX.Element => {
  const {colorMode, toggleColorMode} = useColorMode()

  const isDark = colorMode === 'dark'
  const tooltipLabel = isDark ? SWITCH_TO_LIGHT_MODE : SWITCH_TO_DARK_MODE

  return (
    <Tooltip aria-label={tooltipLabel} label={tooltipLabel} openDelay={500}>
      {isDark ? (
        <IconButton
          aria-label={SWITCH_TO_LIGHT_MODE}
          icon={<SunIcon />}
          onClick={toggleColorMode}
          size="sm"
        />
      ) : (
        <IconButton
          aria-label={SWITCH_TO_DARK_MODE}
          icon={<MoonIcon />}
          onClick={toggleColorMode}
          size="sm"
        />
      )}
    </Tooltip>
  )
}

export default DarkModeSwitch
