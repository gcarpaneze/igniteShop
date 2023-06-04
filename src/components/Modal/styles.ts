import * as Dialog from '@radix-ui/react-dialog'
import { styled } from '../../styles/stitches.config'

export const ModalContainer = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  width: '30rem',
  background: '$gray800',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
})

export const ModalHeader = styled('header', {
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '1.5rem',
})

export const ModalContent = styled('main', {
  padding: '0 3rem 3rem 3rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',

  h1: {
    marginBottom: '2rem',
    color: '$gray100',
    fontWeight: 'bold',
    fontSize: '$lg',
  },
})

export const ItensSection = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  flex: 1,
})

export const Item = styled('div', {
  display: 'flex',
  gap: '1.25rem',

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 93,
  },

  p: {
    color: '$gray300',
    fontSize: '$md',
  },

  strong: {
    color: '$gray100',
    fontSize: '$md',
  },

  button: {
    marginTop: '0.5rem',
    border: 0,
    background: 'transparent',
    color: '$green500',
    fontWeight: 'bold',
    fontSize: '$md',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 100,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const ResumeSection = styled('section', {
  height: '14rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  span: {
    color: '$gray100',
    fontSize: '$md',
    lineHeight: 1.6,
  },

  strong: {
    color: '$gray100',
    fontSize: '$lg',
  },

  button: {
    width: '100%',
    height: '4.3rem',
    padding: '1.25rem',
    background: '$green500',
    border: 0,
    borderRadius: 8,
    fontSize: '$md',
    color: '$white',
    cursor: 'pointer',
    marginTop: '3.4rem',

    '&:hover': {
      background: '$green300',
      transition: '0.2s',
    },
  },
})
