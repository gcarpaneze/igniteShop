import { styled } from '../stitches.config'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 auto',
  height: 656,
  paddingTop: '4rem',

  div: {
    display: 'flex',
    marginBottom: '3rem',
  },

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginBottom: '1.5rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginBottom: '4rem',
  },

  a: {
    display: 'block',
    fontSize: '$lg',
    color: '$green500',
    textDecoration: 'none',
    fontWeight: 'bold',
    lineHeight: 1.4,

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageContainer = styled('div', {
  marginLeft: '-2.62rem',
  width: '100%',
  maxWidth: 130,
  height: 130,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100% )',
  borderRadius: 99,
  padding: '0.25rem',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  img: {
    objectFit: 'cover',
  },
})
