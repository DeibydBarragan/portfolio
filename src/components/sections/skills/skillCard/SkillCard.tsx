import { SiJavascript } from "react-icons/si"

type Props = {}

export default function SkillCard({}: Props) {
  return (
    <div
      className="flex flex-col-reverse rounded-xl overflow-hidden shadow-xl bg-slate-100  dark:bg-slate-900 border dark:border-indigo-700"
    >
      <div className="flex justify-center py-1 border-t-2 dark:border-t dark:border-indigo-700">
        <h4
          className='text-gray-800 dark:text-gray-200 text-md font-bold'
        >
          Javascript
        </h4>
      </div>
      <div className="flex justify-center p-6">
        <SiJavascript
          size={80}
          className='text-yellow-500'
        />
      </div>
    </div>
  )
}