import 'dotenv/config'
import { MercadoPagoConfig, Payment } from 'mercadopago'

const client = new MercadoPagoConfig({
    accessToken: process.env.accessToken,
    options: {
        timeout: 5000
    }
})

const payment = new Payment(client)

const body = {
	transaction_amount: 2 * 1.05,
	description: 'Pagamento de serviços',
	payment_method_id: 'pix',
	payer: {
		email: 'santosguhenrique@gmail.com'
	},
}

payment.create({ body }).then(console.log).catch(console.log)