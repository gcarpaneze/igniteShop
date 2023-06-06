import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../stitches.config'

export const Container = styled(Dialog.Root, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})
