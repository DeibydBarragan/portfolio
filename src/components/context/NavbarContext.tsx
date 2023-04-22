import { SetStateAction, createContext, useState } from "react";

type Props = {
  children: React.ReactNode
}

const NavbarContext = createContext({
  isOpen: false,
  setIsOpen: (value: SetStateAction<boolean>) => {}
})

function NavbarContextProvider({ children }: Props) {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavbarContext.Provider value={{
      isOpen, 
      setIsOpen
    }}>
      {children}
    </NavbarContext.Provider>
  )
}

export { NavbarContext, NavbarContextProvider }