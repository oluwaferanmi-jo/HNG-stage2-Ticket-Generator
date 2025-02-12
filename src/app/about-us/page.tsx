"use client";

import React from "react";

const Page = () => {
	const GITHUB_REPO_URL = "https://github.com/oluwaferanmi-jo/HNG-stage2-Ticket-Generator.git";
	const FIGMA_LINK = 
	"https://www.figma.com/design/hj3DoGgIAmRR5c1Sfr6On7/Event-Ticket-Booking-UI-%E2%80%93-Open-Source-Practice-Project-%F0%9F%8E%9F%EF%B8%8F-(Community)?node-id=2004-266&p=f";

	return (
		<div className="flex items-center justify-center h-full bg-[#0D1B1E] text-white p-4">
			<div className="max-w-3xl w-full bg-[radial-gradient(ellipse_at_top_left,_#07373F_0%,_#0A0C11_140%)] border border-[#1E2D2F] shadow-lg rounded-lg p-6 text-sm">
				<h1 className="text-xl font-bold text-[#A0D8D0] text-center">
					Event Ticket Booking UI – Open Source Practice Project 🏷️
				</h1>

				<section className="mt-6 space-y-4">
					<h2 className="text-[#A0D8D0] font-semibold">Overview</h2>
					<p className="text-gray-300">
						This is a beginner-friendly yet practical Event Ticket Booking UI
						designed for developers to clone, explore, and build upon. The
						design focuses on a seamless, login-free ticket reservation flow,
						allowing users to book event tickets quickly and efficiently.
					</p>
					<p className="text-gray-300">
						The project consists of a three-step ticket booking flow, and
						developers can extend it further by integrating payment solutions,
						user authentication (optional), and ticket validation systems.
					</p>
				</section>

				<section className="mt-6 space-y-4">
					<h2 className="text-[#A0D8D0] font-semibold">Flow & Features</h2>
					
					<h3 className="font-semibold text-white">🎟 Ticket Selection</h3>
					<ul className="list-disc list-inside text-gray-300 space-y-2">
						<li>Users can browse available tickets (Free & Paid).</li>
						<li>Ticket options are displayed in a list or card view.</li>
						<li>
							For <span className="font-semibold text-white">Free Tickets</span>{" "}
							→ Clicking "Get Free Ticket" proceeds to attendee details.
						</li>
						<li>
							For <span className="font-semibold text-white">Paid Tickets</span>{" "}
							→ Clicking "Purchase Ticket" would ideally open a payment modal.
						</li>
					</ul>

					<h3 className="font-semibold text-white">📝 Attendee Details Form</h3>
					<ul className="list-disc list-inside text-gray-300 space-y-2">
						<li>Users input their Name, Email, and optional Phone Number.</li>
						<li>Profile picture upload option with preview functionality.</li>
						<li>Ticket summary is visible to ensure users review their details before submission.</li>
					</ul>

					<h3 className="font-semibold text-white">💳 Payment or Success Page</h3>
					<ul className="list-disc list-inside text-gray-300 space-y-2">
						<li>
							If the ticket is free, the user is taken directly to the Ticket
							Confirmation Page.
						</li>
						<li>
							If the ticket is paid, developers can integrate Stripe, Paystack,
							or Flutterwave to process payments before showing the
							confirmation page.
						</li>
						<li>
							Upon successful booking, users should receive:
							<ul className="list-disc list-inside ml-6 space-y-2">
								<li>A visual ticket preview with a unique QR Code.</li>
								<li>An option to download the ticket as PDF or save it to their device.</li>
								<li>An email confirmation containing ticket details.</li>
							</ul>
						</li>
					</ul>
				</section>

				<section className="mt-6 space-y-4">
					<h2 className="text-[#A0D8D0] font-semibold">How to Build This 🚀</h2>

					<h3 className="font-semibold text-white">🔥 Frontend (Next.js or React)</h3>
					<ul className="list-disc list-inside text-gray-300 space-y-2">
						<li><span className="font-semibold text-white">Component Breakdown:</span></li>
						<ul className="list-disc list-inside ml-6 space-y-2">
							<li>TicketCard.tsx → Displays ticket details</li>
							<li>AttendeeForm.tsx → Captures user details</li>
							<li>PaymentModal.tsx → Handles payment processing</li>
							<li>SuccessScreen.tsx → Shows the final ticket preview</li>
						</ul>
						<li>
							<span className="font-semibold text-white">State Management:</span>{" "}
							React’s Context API, Zustand, or Redux (if needed).
						</li>
						<li>
							<span className="font-semibold text-white">File Handling:</span>{" "}
							Users should be able to upload images using Firebase Storage, Cloudinary, or local preview with URL.createObjectURL().
						</li>
					</ul>

					<h3 className="font-semibold text-white">💾 Backend (Optional)</h3>
					<ul className="list-disc list-inside text-gray-300 space-y-2">
						<li>If persistence is required, a backend can be built using:</li>
						<ul className="list-disc list-inside ml-6 space-y-2">
							<li>Node.js & Express or Firebase Functions</li>
							<li>Database: MongoDB, PostgreSQL, or Firebase Firestore to store ticket records</li>
						</ul>
					</ul>

					<h3 className="font-semibold text-white">💰 Payment Integration</h3>
					<ul className="list-disc list-inside text-gray-300 space-y-2">
						<li>For paid events, developers should integrate:</li>
						<ul className="list-disc list-inside ml-6 space-y-2">
							<li>Stripe Checkout (for international transactions)</li>
							<li>Paystack or Flutterwave (for African users)</li>
						</ul>
					</ul>
				</section>

				<section className="mt-6 space-y-4">
					<h2 className="text-[#A0D8D0] font-semibold">What You'll Learn 🔥</h2>
					<ul className="list-disc list-inside text-gray-300 space-y-2">
						<li>File handling & validation (profile picture uploads).</li>
						<li>Dynamic UI updates based on ticket selection.</li>
						<li>Persisting bookings using local state or a backend.</li>
						<li>Integrating payment gateways for ticket purchases.</li>
						<li>Generating & validating QR Codes for event check-in (Advanced).</li>
					</ul>
				</section>

				<div className="mt-8 flex justify-center space-x-4">
					<button className="bg-[#A0D8D0] text-black px-4 py-2 rounded-lg hover:bg-[#89C4B8] transition"
					 onClick={() => window.open(FIGMA_LINK, "_blank")}>
						View Design
					</button>
					<button
						className="border border-[#A0D8D0] text-[#A0D8D0] px-4 py-2 rounded-lg hover:bg-[#A0D8D0] hover:text-black transition"
						onClick={() => window.open(GITHUB_REPO_URL, "_blank")}
					>
						Github Link
					</button>
				</div>
			</div>
		</div>
	);
};

export default Page;
