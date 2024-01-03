import { BoxCutProps } from "@/app/libs/definitions";

export default function BillData( { data } : { data: BoxCutProps }) {
  return (
    <div className='flex w-full justify-start gap-2 p-6'>
      <div className='flex flex-col w-full justify-start items-center gap-2'>
        <h4 className='text-center font-semibold text-lg'>Billetes</h4>
        <div className='flex items-center justify-around gap-4'>
          <label htmlFor='500' className='flex justify-end'>
            500
          </label>
          <input
            id='500'
            type="text"
            value={ data.money500 }
            readOnly
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
        <div className='flex items-center justify-around gap-4'>
          <label htmlFor="200" className='flex justify-end'>
            200
          </label>
          <input
            id='200'
            type="text"
            value={ data.money200 }
            readOnly
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <label htmlFor="100" className='flex justify-end'>
            100
          </label>
          <input
            id='100'
            type="text"
            value={ data.money100 }
            readOnly
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <label htmlFor="50" className='flex justify-end'>
            50
          </label>
          <input
            id='50'
            type="text"
            value={ data.money50 }
            readOnly
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <label htmlFor="20" className='flex justify-end'>
            20
          </label>
          <input
            id='20'
            type="text"
            value={ data.money20 }
            readOnly
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
      </div>

      <div className='flex flex-col w-full gap-4'>
        <h4 className='text-center font-semibold text-lg'>Monedas</h4>
        <div className='flex items-center justify-center gap-4'>
          <label htmlFor="coin20" className='flex justify-end'>
            20
          </label>
          <input
            id='coin20'
            type="text"
            value={ data.coin20 }
            readOnly
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <label htmlFor="10" className='flex justify-end'>
            10
          </label>
          <input
            id='10'
            type="text"
            value={ data.coin10 }
            readOnly
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <label htmlFor="5" className='flex justify-end'>
            5
          </label>
          <input
            id='5'
            type="text"
            value={ data.coin5 }
            readOnly
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <label htmlFor="2" className='flex justify-end'>
            2
          </label>
          <input
            id='2'
            type="text"
            readOnly
            value={ data.coin2 }
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <label htmlFor="1" className='flex justify-end'>
            1
          </label>
          <input
            id='1'
            type="text"
            readOnly
            value={ data.coin1 }
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
        <div className='flex items-center justify-center gap-4'>
          <label htmlFor=".50" className='flex justify-end'>
            .50
          </label>
          <input
            id='.50'
            type="text"
            readOnly
            value={ data.coin50 }
            className='flex w-full max-w-[100px] bg-slate-300 dark:bg-slate-800 rounded-lg text-base p-2 border border-transparent focus:outline-none focus:border-slate-600'
          />
        </div>
      </div>
    </div>
  )
}
