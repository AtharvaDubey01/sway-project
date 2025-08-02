
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom colors
				coral: "#FF6B35",
				navy: "#004E89",
				yellow: "#FFD166",
				cream: "#F4F1EC",
				dark: "#2B2D42",
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'slide-down': {
					'0%': { transform: 'translateY(-100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' },
				},
				'liquid-flow': {
					'0%': { 
						transform: 'translateX(-100%) translateY(100%) rotate(45deg) scale(0)',
						borderRadius: '50% 70% 60% 80%'
					},
					'50%': { 
						transform: 'translateX(0%) translateY(0%) rotate(180deg) scale(1.2)',
						borderRadius: '80% 50% 70% 60%'
					},
					'100%': { 
						transform: 'translateX(100%) translateY(-100%) rotate(315deg) scale(0)',
						borderRadius: '60% 80% 50% 70%'
					}
				},
				'liquid-flow-reverse': {
					'0%': { 
						transform: 'translateX(100%) translateY(-100%) rotate(-45deg) scale(0)',
						borderRadius: '70% 60% 80% 50%'
					},
					'50%': { 
						transform: 'translateX(0%) translateY(0%) rotate(-180deg) scale(1.2)',
						borderRadius: '50% 80% 60% 70%'
					},
					'100%': { 
						transform: 'translateX(-100%) translateY(100%) rotate(-315deg) scale(0)',
						borderRadius: '80% 50% 70% 60%'
					}
				},
				'liquid-flow-slow': {
					'0%': { 
						transform: 'translateX(-50%) translateY(150%) rotate(90deg) scale(0)',
						borderRadius: '60% 70% 50% 80%'
					},
					'50%': { 
						transform: 'translateX(50%) translateY(-50%) rotate(270deg) scale(1.3)',
						borderRadius: '80% 60% 70% 50%'
					},
					'100%': { 
						transform: 'translateX(150%) translateY(-150%) rotate(450deg) scale(0)',
						borderRadius: '50% 80% 60% 70%'
					}
				},
				'liquid-flow-fast': {
					'0%': { 
						transform: 'translateX(150%) translateY(-50%) rotate(135deg) scale(0)',
						borderRadius: '70% 50% 80% 60%'
					},
					'50%': { 
						transform: 'translateX(-50%) translateY(50%) rotate(315deg) scale(1.1)',
						borderRadius: '60% 80% 50% 70%'
					},
					'100%': { 
						transform: 'translateX(-150%) translateY(150%) rotate(495deg) scale(0)',
						borderRadius: '80% 60% 70% 50%'
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 5s ease-in-out infinite',
				'slide-up': 'slide-up 0.7s ease-out',
				'slide-down': 'slide-down 0.7s ease-out',
				'liquid-flow': 'liquid-flow 2s ease-in-out infinite',
				'liquid-flow-reverse': 'liquid-flow-reverse 2.5s ease-in-out infinite',
				'liquid-flow-slow': 'liquid-flow-slow 3s ease-in-out infinite',
				'liquid-flow-fast': 'liquid-flow-fast 1.5s ease-in-out infinite',
			},
			fontFamily: {
				display: ['var(--font-cabinet-grotesk)', 'sans-serif'],
				sans: ['var(--font-inter)', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
