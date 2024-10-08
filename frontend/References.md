## Installation Ref:

1. nextjs
2. tailwind
3. shadcnUI
4. React-Markdown

### Tailwind Customization and Usage

1. [Themes Customization](https://tailwindcss.com/docs/theme): Adding default colors.

### Components Added

1.  [Shadcn/ui - Button](https://ui.shadcn.com/docs/components/button): npx shadcn-ui@latest add button
2.  [Shadcn/ui - Label](https://ui.shadcn.com/docs/components/label): npx shadcn-ui@latest add label
3.  [Shadcn/ui - RadioGroup](https://ui.shadcn.com/docs/components/radio-group): npx shadcn-ui@latest add radio-group
4.  [Shadcn/ui - NavigationMenu](https://ui.shadcn.com/docs/components/navigation-menu): npx shadcn-ui@latest add navigation-menu
5.  [Shadcn/ui - Tooltip](https://ui.shadcn.com/docs/components/tooltip): npx shadcn-ui@latest add tooltip
6.  [Shadcn/ui - Input](https://ui.shadcn.com/docs/components/input): npx shadcn-ui@latest add input
7.  [Shadcn/ui - Forms](https://ui.shadcn.com/docs/components/form): npx shadcn-ui@latest add form
8.  [Shadcn/ui - Badge](https://ui.shadcn.com/docs/components/badge): npx shadcn-ui@latest add badge
9.  [Shacn/ui - Card](https://ui.shadcn.com/docs/components/card): npx shadcn-ui@latest add card
10. [Shadcn/ui - Avatar](https://ui.shadcn.com/docs/components/avatar): npx shadcn-ui@latest add avatar
11. [Shadcn/ui - Pagination](https://ui.shadcn.com/docs/components/pagination): npx shadcn-ui@latest add pagination
12. [Shadcn.ui - Badge](https://ui.shadcn.com/docs/components/badge): npx shadcn-ui@latest add badge
13. [Shadcn/ui - Seperator](https://ui.shadcn.com/docs/components/separator): npx shadcn-ui@latest add separator
14. [Shadcn/ui - Breadcrumbs](https://ui.shadcn.com/docs/components/breadcrumb): npx shadcn-ui@latest add breadcrumb
15. [Shadcn/ui - Sheet](https://ui.shadcn.com/docs/components/sheet): npx shadcn-ui@latest add sheet

### Themes/Colors

The palette is utlisized from different options given on [Coolors](https://coolors.co/). Following paletts are utlisied to change themes.

1. [GreyTheme](https://coolors.co/palette/f8f9fa-e9ecef-dee2e6-ced4da-adb5bd-6c757d-495057-343a40-212529)
2. [BrownTheme](https://coolors.co/palette/edede9-d6ccc2-f5ebe0-e3d5ca-d5bdaf)
3. [GreenTheme](https://coolors.co/palette/6b9080-a4c3b2-cce3de-eaf4f4-f6fff8)
4. [RoyalBlue](https://coolors.co/palette/e7ecef-274c77-6096ba-a3cef1-8b8c89)

Additional Brown Color Palette

- [ExtraBrownColor](https://coolors.co/palette/ecf8f8-eee4e1-e7d8c9-e6beae-b2967d)
- [SlateGray](https://coolors.co/708090)
- [BlackColor](https://coolors.co/010b13)
- [TanBrown](https://coolors.co/d2b48c)
- [SlateBrown](https://coolors.co/81613e)
- [DarkGreen](https://coolors.co/49796b)
- [CelestialBlue](https://coolors.co/4997d0)
- [CarolinBlue](https://coolors.co/70aeda)

### Debugging and Other References

1. How to use shadcn/ui-radio buttons with useState of react. Debugged using snippet at this [link](https://github.com/shadcn-ui/ui/issues/735#issuecomment-2129834835).
2. How to make header and navbar sticky, Debugged using this [link](https://www.w3schools.com/howto/howto_js_sticky_header.asp)
3. How to customize themes in tailwind. Debugged using this [link: Custom themes with TailwindCSS in under 9 minutes - Youtube](https://www.youtube.com/watch?v=vg4g68oJNGM)
4. How to configure fonts in nextjs13. Debugged using this [link](https://prismic.io/blog/nextjs-fonts)
5. How to navigate between different pages in NextJs-AppRouter. Information provied at this [link](https://nextjs.org/docs/app/api-reference/functions/use-router)
6. How to fetch data from apis in NextJs. Information provided at these links: [link1](https://nextjs.org/docs/app/building-your-application/data-fetching), [link2](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating)
7. How to implement pagination in client side components using useParams hooks in next-js. Debugged using this [tutorial](https://www.youtube.com/watch?v=tSI98g3PDyE&list=PLKixLCBbkGHWavP8jtbyx62niDb_UVdsw&index=2)
8. Was not showing slug page. Deleting json.vercel fixed it.
9. How to navigate back, specially when we can not specify exact url. It is done using useRouter hook, but component needs to be client-side component. [Doc-link here](https://nextjs.org/docs/app/api-reference/functions/use-router#userouter)
10. How to get url pathname in nextjs-app-router. Debugged using this [link](https://nextjs.org/docs/app/api-reference/functions/use-pathname)
11. React Context links: [Link1](https://dev.to/muhammadazfaraslam/managing-global-state-with-usereducer-and-context-api-in-next-js-14-2m17), [Link2](https://atulfind.medium.com/react-global-state-management-using-context-and-reducer-fa5b85f43b61), [Link3](https://scientyficworld.org/react-context-api-for-global-state-management/), [Link4](https://dev.to/shareef/context-api-with-typescript-and-next-js-2m25)
12. Converting description text using markdown-library: [React-Markdown-Lib](https://www.npmjs.com/package/react-markdown/v/8.0.6)
13. Filtering Arrays in UserDataContext: [concat-js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat), [includes-js](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
14. Deciding between Server and Client components: [Next-Rendering-Patterns](https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns)
15. Context was being cleared when navigating to next page. Fixed it through localStorage. Guided by this [link](https://stackoverflow.com/questions/73346406/context-is-cleared-when-i-navigate-to-another-page-with-the-browser-address-bar)
16. Server Components nested within client components: [ServerActions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations)
17. Using Async functions in useEffect: [link](https://dev.to/jasmin/how-to-use-async-function-in-useeffect-5efc)
18. How to get a random value from array: [link](https://www.programiz.com/javascript/examples/get-random-item)
19. How to close Shadcn/ui-sheet from the links in the content. Debugged using this [link](https://github.com/shadcn-ui/ui/discussions/1790)
