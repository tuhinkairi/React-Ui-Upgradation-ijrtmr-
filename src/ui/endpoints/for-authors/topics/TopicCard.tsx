import type { TopicType } from '../../../../data/topics'

export default function TopicCard({ title, data }: TopicType) {

  return (
    <div className='leading-relaxed w-fit h-fit '>
      <h2 className='text-lg xl:text-xl 2xl:text-2xl font-bold capitalize mb-2 xl:mb-4'>{title}</h2>
        <ul className='list-disc list-inside xl:text-base 2xl:text-lg xl:space-y-3'>
           {data.map(e=><li>{e}</li>)} 
        </ul>
    </div>
  )
}
