export function Footer() {
  return (
    <footer className="mt-20 border-t">
      <div className="container-p py-10 text-sm text-gray-600 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} BullDiving. All rights reserved.</p>
        <p>
          Built with <a className="underline" href="https://nextjs.org">Next.js</a> & <a className="underline" href="https://tailwindcss.com">Tailwind CSS</a>.
        </p>
      </div>
    </footer>
  )
}
