# Angular-trpc

Forked from https://github.com/analogjs/analog/tree/beta/packages/trpc because of https://github.com/analogjs/analog/issues/1894 

## Getting started

### Server

- If you are using Angular SSR you may look at  the demo application for how to add trpc to your existing AngularSSR express api, or visit https://trpc.io/docs/v10/server/adapters/express 
- If you are hosting TRPC in a seperate express or other framework, please look at the TRPC documentation for how to set it up using your framework.

If you would like to have AngularSSR with other API frameworks than Express you may get some inspiration from this repo https://github.com/JeanMeche/ssr-v19 where they showcase AngularSSR with Elysia, Fastify, H3, Hono and ExpressJs. I hope that repo is still maintained by the time you read this.

The important part is to know the server url and route in the client, and to be able to import your appRouter type into the frontend. 

### Client
- `pnpm install angular-trpc`
- todo

## Why do you need this library to use TRPC with Angular?
Using TRPC with Angular is not very well documented, but if you are not using AngularSSR then it is pretty straight forward to get it working. You may use this repo as an example for your own implementation, or install it and use the client with most bugs fixed out of the box.

This library improves TRPCs integration with Angular using RxJs and ensures that Requests are not duplicated on the server when prerendering and on the client. This is typical problem you meet when you try to do it yourself without this library.

## Why use TRPC
With TRPC you get strongly typed API requests and you don't have either hope your API input and output paramaters change and break your application, or run manual and tiresome OpenAPI generators. When you change inputs or outputs in TRPC the types will instantly change in the frontend code and show you errors before runtime.

TRPC is not for everyone, but if you use a BFF (Backend-For-Frontend) pattern we have found it extremely usefull.

## TODO on this project
- Upgrade to TRPC v11 like this https://github.com/analogjs/analog/pull/1826
- Fix duplicate TRPC request during ssr like this https://github.com/analogjs/analog/pull/1822