import { createContext, useContext, useReducer } from 'react'

const CartContext = createContext(null)

const initialState = {
  cartItems: [],
  totalCount: 0,
}

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const product = action.payload
      const existingIndex = state.cartItems.findIndex((item) => item.id === product.id)
      let updatedItems

      if (existingIndex > -1) {
        updatedItems = state.cartItems.map((item, index) =>
          index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item
        )
      } else {
        updatedItems = [...state.cartItems, { ...product, quantity: 1 }]
      }

      return {
        ...state,
        cartItems: updatedItems,
        totalCount: state.totalCount + 1,
      }
    }

    case 'REMOVE_FROM_CART': {
      const productId = action.payload
      const existingItem = state.cartItems.find((item) => item.id === productId)
      if (!existingItem) return state

      const updatedItems = state.cartItems.filter((item) => item.id !== productId)
      return {
        ...state,
        cartItems: updatedItems,
        totalCount: Math.max(0, state.totalCount - existingItem.quantity),
      }
    }

    case 'CLEAR_CART':
      return initialState

    default:
      return state
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId })
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems: state.cartItems,
        totalCount: state.totalCount,
        addToCart,
        removeFromCart,
        clearCart,
        dispatch,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}
