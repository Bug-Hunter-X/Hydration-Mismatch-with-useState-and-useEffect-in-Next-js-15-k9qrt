# Next.js 15 Hydration Mismatch Bug

This repository demonstrates a common hydration mismatch error in Next.js 15 applications when using `useState` and `useEffect` for asynchronous data fetching.  The issue occurs when the server-side render doesn't match the client-side render due to timing differences in data loading.

## Bug Description:
The `MyComponent` fetches data asynchronously using `setTimeout`. This causes the server to render 'Loading...' while the client sees the actual fetched data. This mismatch leads to hydration errors.

## Solution:
The solution involves using `useSuspense` or a better approach to async data fetching, such as React Query, SWR, or similar libraries to manage loading states and revalidate data.