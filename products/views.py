from django.shortcuts import redirect, render
import json
import stripe
from django.conf import settings
from django.http import JsonResponse
# Create your views here.
from django.views import View

stripe.api_key = settings.STRIPE_SECRET_KEY

class CreateCheckoutSessionView(View):
    def post(self, request, *args, **kwargs):
        try:
            checkout_session = stripe.checkout.Session.create(
                line_items=[
                    {
                        # Provide the exact Price ID (e.g. pr_1234) of the product you want to sell
                        'price': '{{PRICE_ID}}',
                        'quantity': 1,
                    },
                ],
                payment_method_types=[
                'card',
                ],
                mode='payment',
                success_url=YOUR_DOMAIN + '/success/',
                cancel_url=YOUR_DOMAIN + '/cancel/',
            )
        except Exception as e:
            return str(e)

        return redirect(checkout_session.url, code=303)

    def calculate_order_amount(items):
        # Replace this constant with a calculation of the order's amount
        # Calculate the order total on the server to prevent
        # people from directly manipulating the amount on the client
        return 1400