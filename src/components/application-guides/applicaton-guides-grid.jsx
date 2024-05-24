import clsx from 'clsx'

import { guides } from './index'
import Link from 'next/link'
import { Grid } from '../products/Grid'
import { LogoWithName } from '../products/Logo'

export function ApplicationGuidesGrid({
  onClick,
  withoutFallback,
  className,
  menuItem,
  ...props
}) {
  console.log('menuItem', menuItem)
//   const guides =  guides.filter(
//         (guide) => menuItem === product.navigationMenuCatergory
//       )
    
  return (
    <ul className={clsx(['grid grid-flow-row gap-3 relative md:grid-flow-row md:grid-cols-2', className])} {...props}>
      {guides.map((guide) => (
        <li key={guide.path}>
          <Link
            href={`/${guide.path}`}
            className="block rounded-lg p-3 hover:bg-slate-50 hover:dark:bg-slate-700"
            onClick={onClick}
          >
            <LogoWithName product={guide}></LogoWithName>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export function MarkdocGrid() {
  return (
    <div className="not-prose">
      <Grid
        className="relative md:grid-flow-col md:grid-cols-4 md:grid-rows-4"
        withoutFallback
      />
    </div>
  )
}
