import { styled } from '../stitches.config'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 560,
  height: 656,
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

export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    background: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    cursor: 'pointer',
    padding: '1.5rem',
    fontSize: '$md',
    fontWeight: 'bold',

    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      background: '$green300',
    },
  },
})
