import { NextApiRequest, NextApiResponse } from 'next'

import { stripe } from '../../lib/stripe'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { pricesIds } = req.body

  if (req.method !== 'POST') {
    return res.status(405)
  }

  if (pricesIds.length === 0) {
    return res.status(400).json({
      error: 'Product not found',
    })
  }

  const sucessURL = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelURL = `${process.env.NEXT_URL}`

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: sucessURL,
    cancel_url: cancelURL,
    mode: 'payment',
    line_items: pricesIds.map((priceId) => {
      return {
        price: priceId.price,
        quantity: 1,
      }
    }),
  })

  return res.status(201).json({
    checkoutURL: checkoutSession.url,
  })
}
