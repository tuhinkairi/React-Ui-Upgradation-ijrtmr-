import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../../../lib/store/store';
import CommonLayout from '../../../components/layout/CommonLayout';
// import JournalCriteria from '../card/JournalCriteria';
import JournalOverview from '../card/JournalOverview';
// import JournalSelection from '../card/JournalSection';
// data.js
// const journalOverviewData = {
//   title: "Best Journal for Publishing Research Paper in Mechanical Engineering",
//   category: "Journals",
//   date: "2025-03-06",
//   description:
//     "Publishing research papers is a cornerstone of academic and professional growth for mechanical engineers. Choosing the right journal ensures that research reaches the appropriate audience, gains credibility, and contributes meaningfully to the field. Below are key factors to consider when selecting a journal and some top journals in mechanical engineering.",
//   points: [
//     "Boost Visibility: High-quality journals are indexed in major databases, making research more accessible globally.",
//     "Enhance Credibility: Journals with rigorous peer review processes add authenticity to research.",
//     "Impact Career Growth: Publishing in top-tier journals can open doors to promotions, funding, and collaborations.",
//     "Drive Innovation: Research reaches the right audience, inspiring further studies and practical applications."
//   ]
// };

// const journalCriteriaData = {
//   title: "Criteria for Selecting the Best Journal",
//   sections: [
//     {
//       heading: "Impact Factor: A Measure of Influence",
//       paragraph: "The impact factor measures the average number of citations received by articles in a journal. A higher impact factor indicates strong recognition in the field."
//     },
//     {
//       heading: "Peer Review Process: Ensuring Quality",
//       paragraph: "A robust peer review system ensures that published research is high-quality, original, and significant."
//     },
//     {
//       heading: "Open Access vs. Subscription-Based Journals",
//       points: [
//         "Open Access Journals: Freely available research but may charge publication fees.",
//         "Subscription-Based Journals: Restricted access but often have higher impact factors and credibility."
//       ]
//     },
//     {
//       heading: "Relevance to Mechanical Engineering",
//       paragraph: "Choosing a journal that aligns with a researcher’s niche ensures that their work reaches the most relevant audience."
//     },
//     {
//       heading: "Top Journals in Mechanical Engineering",
//       points: [
//         "International Journal of Mechanical Sciences: Covers mechanics of materials, structural analysis, fluid dynamics, and thermodynamics.",
//         "Journal of Mechanical Design: Focuses on design theory, innovative applications, and optimization techniques.",
//         "IJSREAT: Open-access journal covering engineering advancements."
//       ]
//     }
//   ]
// };
// const journalsection = {
//   mainTitle: 'Additional Considerations for Journal Selection',
//   sections: [
//     {
//       title: 'Publication Speed: Timing Matters',
//       content: 'Journals with shorter review and publication times ensure timely dissemination of research.',
//     },
//     {
//       title: "Journal’s Audience: Reaching the Right People",
//       content: [
//         'Who reads the journal?',
//         'Is the audience academic, industrial, or a mix of both?',
//         'Does it reach the relevant research community?'
//       ],
//     },
//     {
//       title: 'Ethical Considerations: Avoiding Predatory Journals',
//       content: [
//         'Verify indexing in databases like Scopus or Web of Science.',
//         "Check the journal's impact factor and peer review process.",
//         'Ensure transparency in publication fees and editorial policies.'
//       ],
//     }
//   ],
//   conclusion:
//     'Selecting the best journal involves evaluating factors like impact factor, peer review process, open access vs. subscription-based models, and relevance to specific fields. Journals like the International Journal of Mechanical Sciences, Journal of Mechanical Design, and IJSREAT offer excellent platforms for high-quality research.',
//   finalThoughts:
//     'Publishing research is an opportunity to contribute to mechanical engineering knowledge. Aligning journal choice with research goals and target audiences ensures maximum impact and credibility.',
// };

const BlogShow = () => {
  const data = useAppSelector((state) => state.blog.activeBlog);
  const navigate = useNavigate();  
  if (!data?.id) {
    navigate('/blog');
  }
  return (

    <CommonLayout className='space-y-6' title='Blog'>
      {/* <h2 className="text-3xl font-serif">{data?.title}</h2>
      <div dangerouslySetInnerHTML={{__html:data?.description??""}}></div> */}
      <JournalOverview category={data?.category??""} title={data?.title??""} date={data?.created_at?.split("T")[0]??""} description={data?.meta_description??""} points={[]} other={data?.description??""}/>
      {/* <JournalCriteria {...journalCriteriaData} />
      <JournalSelection {...journalsection} /> */}
    </CommonLayout>
  );
};

export default BlogShow;
