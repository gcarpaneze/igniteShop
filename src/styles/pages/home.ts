import { styled } from '../stitches.config'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px)/2))',
  marginLeft: 'auto',
  minHeight: 465,
})

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: 8,
  padding: '0.25rem',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  color: '$gray100',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },

  footer: {
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '2rem',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,

    transform: 'translateY(110%)',
    opacity: 0,
    transition: 'all 0.2s',

    background: 'rgba(0, 0, 0, 0.6)',

    p: {
      fontSize: '$lg',
      marginBottom: '0.25rem',
    },

    strong: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },

    svg: {
      background: '$green500',
      padding: '0.75rem',
      borderRadius: 8,
      color: '$white',
      width: '3.5rem',
      height: '3.5rem',
      fontSize: '$lg',

      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0)',
      opacity: 1,
    },
  },
})
