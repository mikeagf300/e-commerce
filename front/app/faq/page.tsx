"use client";

const FAQ = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            {/* Header */}
            <section className="bg-blue-600 text-white py-16">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-semibold mb-4">Frequently Asked Questions</h1>
                    <p className="text-lg mb-6">
                        Here are the answers to some of the most frequently asked questions. If you need further assistance, feel free to contact us.
                    </p>
                </div>
            </section>

            {/* FAQ List */}
            <section className="container mx-auto py-16 px-6">
                <div className="space-y-8">
                    {/* Cada pregunta se mapea con su respuesta correspondiente */}
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">What is your return policy?</h3>
                        <p className="text-lg text-gray-600">
                            We offer a 30-day return policy on most items. If you're not satisfied with your purchase, simply return it within 30 days for a full refund or exchange.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">How can I track my order?</h3>
                        <p className="text-lg text-gray-600">
                            Once your order is shipped, you will receive an email with a tracking number and a link to track your order online.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">Do you offer international shipping?</h3>
                        <p className="text-lg text-gray-600">
                            Yes! We offer international shipping to most countries. Shipping costs and delivery times may vary depending on your location.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-800">How do I apply a discount code?</h3>
                        <p className="text-lg text-gray-600">
                            Simply enter the discount code at checkout to receive a discount on your purchase. Make sure to check the expiration date of the code.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;
