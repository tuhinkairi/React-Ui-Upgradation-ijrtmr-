import { Link } from 'react-router-dom'
import CommonLayout from '../../../components/layout/CommonLayout'


export default function ArticleStatus() {
  return (
    <CommonLayout className=''>
      <div className='text-center space-y-10 my-12'>
        <h1 className='text-2xl font-bold'>Author can check the article status by using Author login Credential</h1>
        <img src="/artical-processing/artical.png" className='w-full h-auto' alt="artical processing" />
        <Link to="https://editorial.fdrpjournals.org/login?journal=2" target='_blank'>
          <button className='primaryBtn'>
            Click Here
          </button>
        </Link>
      </div>
    </CommonLayout>
  )
}
