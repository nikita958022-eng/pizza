# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

# 🍕 Slice & Dice

A pizza ordering web app built with React. Browse the menu, add pizzas to your cart, change quantities and place an order.

**Live demo:** https://your-app-name.vercel.app

## Features

- Browse the pizza menu
- Add to cart, increase or decrease quantity, remove items
- Live cart item count in the navbar
- Order total calculation
- Empty cart state with a link back to the menu
- Order confirmation page, and the cart clears after an order is placed
- Footer with quick links and contact details
- Multiple pages with React Router

## Tech Stack

- React 19
- Redux Toolkit (cart state)
- React Router
- Vite
- Oxlint

## Run Locally

```bash
git clone https://github.com/nikita958022-eng/pizza.git
cd pizza
npm install
npm run dev
```

## Project Structure

```
src/
  component/    NavBar, PizzaCard, Footer
  components/   Home, Cart, Order-Confirmation
  data/         Pizza.js (menu data)
  slice/        cartSlice, store (Redux Toolkit)
```

## Planned Improvements

- Save the cart in localStorage
- Search and veg / non-veg filter
- Checkout form with validation
- Login and register with a Node, Express and MongoDB backend