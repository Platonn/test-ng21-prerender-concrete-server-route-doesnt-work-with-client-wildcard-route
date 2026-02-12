# Prerendering of concrete server route doesn't work, when using wildcard client route

## What this repo contains

This is a minimal fresh Angular 21 app with minimal problem reproduction steps:

- Created with `ng new ... --ssr` with server routing
- Added one client route in `app.config.ts`:
  - `'**'` - empty `CmsDrivenComponent`
- Added 2 server routes in `app.config.server.ts`:
  - `'some-concrete-page'` - `Prerender` mode
  - `'**'` - `Server` mode

### Motivation for this setup:

Client routes consist only of CMS-driven `'**'` wildcard route - i.e. the URL is read, then CMS data loaded dynamically for that URL, and components are rendered dynamically afterwards.

But we'd like to Prerender some concrete route(s). We don't want to define those routes explicitly in the Angular client router.

btw. Ideally we'd like to source the list of the URLs to prerender from an external file (like `prerender.txt`), but not edit the Angular client routing configuration in `.ts` file. But with `outputMode: server` those routes for Prerendering need to be defined in `serverRoutes`.

## Problem

When running `ng build` it throws an error:

`✘ [ERROR] The 'some-concrete-page' server route does not match any routes defined in the Angular routing configuration (typically provided as a part of the 'provideRouter' call). Please make sure that the mentioned server route is present in the Angular routing configuration.`
