import { Dialog } from '@headlessui/react'
import { AnimatePresence, motion } from 'framer-motion'
import { CgClose } from 'react-icons/cg'

type Props = {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  children: React.ReactNode
}

export default function Modal({isOpen, setIsOpen, children}: Props) {

  const closeModal = () => {
    setIsOpen(false)
  }

  return (  
    <AnimatePresence>
     {isOpen && (
        <Dialog
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/25 backdrop-blur-sm'
          open={isOpen}
          onClose={closeModal}
          as={motion.div}
          initial={{
            opacity:0
          }}
          animate={{
            opacity:1
          }}
          exit={{
            opacity:0
          }}
        >
          <motion.div 
            className="fixed inset-0 overflow-y-auto"     
          >
            <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Dialog.Panel
                  className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white dark:bg-zinc-950 p-6 text-left align-middle shadow-xl"
                  as={motion.div}
                  initial={{
                    scale:0.95,
                    y:10
                  }}
                  animate={{
                    scale:1,
                    y:0
                  }}
                  exit={{
                    scale:0.95,
                    y:10
                  }}
                >
                  <button onClick={closeModal}>
                    <CgClose
                      className="absolute right-5 top-5 text-gray-400 hover:text-gray-500 transition ease-in-out"
                      size={25} 
                    />
                  </button>
                  {children}
                </Dialog.Panel>
            </div>
          </motion.div>
        </Dialog>)}
    </AnimatePresence>
  )
}