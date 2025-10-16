import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: {
		default: "Quizwinz - Play and Win Rewards",
		template: "%s | Quizwinz",
	},
	description:
		"Play engaging quizzes and earn reward coins. Test your knowledge and win exciting prizes with Quizwinz.",
	keywords:
		"quiz, rewards, play, win, quizzes, knowledge, games, online quizzes",
	authors: [{ name: "Quizwinz" }],
	creator: "Quizwinz",
	openGraph: {
		title: "Quizwinz - Play and Win Rewards",
		description:
			"Play engaging quizzes and earn reward coins. Test your knowledge and win exciting prizes with Quizwinz.",
		url: "https://quizwinz.com",
		siteName: "Quizwinz",
		images: [
			{
				url: "https://quizwinz.com/og-image.png",
				width: 1200,
				height: 630,
				alt: "Quizwinz Logo",
			},
		],
		locale: "en_US",
		type: "website",
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	alternates: {
		canonical: "https://quizwinz.com",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<head suppressHydrationWarning>
				<meta
					name='google-site-verification'
					content='YOUR_GOOGLE_SITE_VERIFICATION_CODE'
				/>
				{/* Google Analytics */}
				<script
					async
					src='https://www.googletagmanager.com/gtag/js?id=GOOGLE_ANALYTICS_ID'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', 'GOOGLE_ANALYTICS_ID', {
								'page_path': window.location.pathname,
							});
						`,
					}}
				/>

				{/* Google AdSense */}
				<script
					async
					crossOrigin='anonymous'
					src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXXXXX'
				/>
				<meta name='application-name' content='Quizwinz' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='theme-color' content='#000000' />
				<link rel='shortcut icon' href='/favicon.ico' />
			</head>
			<body
				className={`${inter.className} bg-gradient-to-br from-slate-900 to-slate-300`}
				suppressHydrationWarning>
				<div className='min-h-screen bg-slate-900 max-w-md mx-auto relative'>
					{children}
				</div>
			</body>
		</html>
	);
}
