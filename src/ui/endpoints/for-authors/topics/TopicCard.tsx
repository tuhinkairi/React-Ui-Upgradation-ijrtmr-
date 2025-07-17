import type { TopicType } from '../../../../data/topics'

export default function TopicCard({ title, data }: TopicType) {

  return (
    <div className='leading-relaxed w-fit h-fit'>
      <h1 className='text-lg font-bold capitalize mb-2'>{title}</h1>
        <ul className='list-disc list-inside'>
           {data.map(e=><li>{e}</li>)} 
        </ul>
    </div>
  )
}
