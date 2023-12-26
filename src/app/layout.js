import './globals.css'

export const metadata = {
  title: 'Se liga: É a Verdade',
  description: 'Se liga: É a Verdade',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body className="">{children}</body>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="https://unpkg.com/browse/xtendui@1.4.2/"></script>
    </html>
  )
}
