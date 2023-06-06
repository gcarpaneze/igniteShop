import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles/stitches.config'

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  margin: '0 auto',
  maxWidth: 1180,

  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '> div': {
    display: 'flex',

    span: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
      right: 12,
      bottom: 6,
      width: 26,
      height: 26,

      background: '$green500',
      borderRadius: 99,
      border: 'solid 0.15rem $gray900',

      color: '$white',
      fontWeight: 'bold',
      fontSize: '$sm',
    },
  },
})

export const ButtonCart = styled(Dialog.Trigger, {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.75rem',
  background: '$gray800',
  borderRadius: 6,
  border: 0,
  cursor: 'pointer',

  svg: {
    color: '$gray400',
    fontSize: 24,
  },
})
