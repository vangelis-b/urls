import {Box, Switch, Tooltip, useColorMode} from '@chakra-ui/react'

const DarkModeSwitch = (): JSX.Element => {
  const {colorMode, toggleColorMode} = useColorMode()

  const isDark = colorMode === 'dark'
  const tooltipLabel = isDark ? 'Disable dark mode' : 'Enable dark mode'

  return (
    <Tooltip aria-label={tooltipLabel} label={tooltipLabel} openDelay={500}>
      <Box>
        <Switch isChecked={isDark} onChange={toggleColorMode} />
      </Box>
    </Tooltip>
  )
}

export default DarkModeSwitch
