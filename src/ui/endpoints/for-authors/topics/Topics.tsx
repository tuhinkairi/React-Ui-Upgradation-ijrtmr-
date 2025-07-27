import CommonLayout from '../../../components/layout/CommonLayout'
import Title from '../../../other/Title'
import { topics_list } from '../../../../data/topics'
import TopicCard from './TopicCard'

export default function Topics() {

  return (
    <CommonLayout>
      <article>

        <Title>Topics</Title>
        <section className='topics mb-4 py-2 grid grid-cols-2 gap-4 jusctify-center'>
          <div className='space-y-8'>
            {topics_list && (topics_list).map((topic, index) => (

              index != topics_list.length - 1 && index % 2 == 0 && <TopicCard {...topic} />

            ))}
          </div>
          <div className='space-y-8'>
            {topics_list && (topics_list).map((topic, index) => (
              (index == topics_list.length - 1 || index % 2 == 1) && <TopicCard {...topic} />
            ))}
          </div>

        </section>
      </article>
    </CommonLayout>
  )
}
