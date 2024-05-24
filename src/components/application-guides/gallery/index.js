import {
  changelogSection,
  documentationSection,
  recipesSection,
  referencesSection,
} from '@/shared/sections'
import { Hero } from './Hero'
import { Logo } from './Logo'

export const gallery = {
  name: 'Gallery',
  headline: 'Learn to create an Nft/Asset Gallery with DAS',
  description: 'Learn to create an Nft/Asset Gallery with DAS',
  navigationMenuCatergory: 'Utility',
  path: 'fusion',
  logo: Logo,
  github: 'https://github.com/metaplex-foundation/mpl-trifle',
  className: 'accent-amber',
  heroes: [{ path: '/fusion', component: Hero }],
  sections: [
    {
      ...documentationSection('fusion'),
      navigation: [
        {
          title: 'Introduction',
          links: [
            { title: 'Overview', href: '/fusion' },
            { title: 'Getting started', href: '/fusion/getting-started' },
          ],
        },
        {
          title: 'Features',
          links: [
            { title: 'Constraint Types', href: '/fusion/constraint-types' },
            { title: 'Transfer Effects', href: '/fusion/transfer-effects' },
          ],
        },
      ],
    },
    { ...referencesSection('fusion') },
    { ...recipesSection('fusion') },
    { ...changelogSection('fusion') },
  ],
}
