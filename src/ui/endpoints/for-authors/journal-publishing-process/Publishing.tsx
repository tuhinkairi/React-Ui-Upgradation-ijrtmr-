import {
  FileText,
  ClipboardCheck,
  MessageCircleQuestion,
  RefreshCw,
  FileCheck,
  Send,
  Users2,
  BookOpen,
} from 'lucide-react'; // Replace with your own or inline SVGs
import StepCard from './StepCard';
import Title from '../../../other/Title';

const steps = [
  {
    step: 1,
    title: 'Submit',
    description:
      'Submit your research through Editorial Management System-EMS (online submission). You will need to register for an account to do this. Once your account is set up, you will be guided through a 7-step submission process.',
    icon: <FileText size={28} />,
  },
  {
    step: 2,
    title: 'Editorial check',
    description:
      'Your paper will then be read by the journal Editor to see if it fits with the aims and scope of the journal. They will enter it into a plagiarism Check, peer review process which considers the quality, originality, approach and clarity of your paper.',
    icon: <ClipboardCheck size={28} />,
  },
  {
    step: 3,
    title: 'Decision',
    description:
      <p className=''>
        <p>Once the reviewers have read your paper, they will make one of the following recommendations:</p>
        <ul className="list-disc list-inside">
          <li>Accept</li>
          <li>Minor revisions, Major revisions</li>
          <li>Reject</li>
        </ul>
        <p>

          The final decision lies with the Editor.Reviewer feedback on the paper will be provided to the corresponding author.
          Note, if the paper is outside the journal’s scope, some Editor -in -chief may reject it.
        </p>
      </p>
    ,
    icon: <MessageCircleQuestion size={28} />,
  },
  {
    step: 4,
    title: 'Revisions',
    description:
      'You will receive an email from the Editor containing feedback and a final decision. If you are asked to make revisions, you will generally have 1-2 weeks to revise your paper for minor revisions, and 2-4 weeks for major revisions. The editor will confirm the deadline when they provide their feedback and decision. If not, you may be asked to perform multiple revisions or your paper may be rejected.',
    icon: <RefreshCw size={28} />,
  },
  {
    step: 5,
    title: 'Acceptance',
    description:
      'Once accepted, your paper is immediately processed by our in-house team. Who check it is complete and whether any necessary third-party permissions have been provided.',
    icon: <FileCheck size={28} />,
  },
  {
    step: 6,
    title: 'Typesetting',
    description:
      `Your paper will be returned to you for a final check along with any requests for missing information, before being sent to
EMS Submit, our licencing and APC system. When the Copyright Transfer Agreement is signed (and any applicable
 APC paid) your paper is then sent to our typesetting team.`,
    icon: <Send size={28} />,
  },
  {
    step: 7,
    title: 'Author proofs',
    description:
      `Your proof must be returned to the typesetters (Proofreading, Layout Editing, and Galley
Correction). Supplier
project managers will email corresponding authors and co-authors in the event of delay in returning proofs, followed by
contact with the journal’s editor-in-chief.`,
    icon: <Users2 size={28} />,
  },
  {
    step: 8,
    title: 'Publication',
    description:
      `When a journal issue is available for your article to be published in, the typeset files will be reworked by the typesetting
team to add pagination, volume and issue details. The re-supplied files will be re- loaded to our online platform.`,
    icon: <BookOpen size={28} />,
  },
];

const Publishing = () => {
  return (
    <div className="">
      <Title>Journal Publishing Process</Title>
      <p className="text-gray-600 my-6 mb-10 leading-relaxed text-sm xl:text-base 2xl:text-lg">
        We know it’s important to you to have your research published as quickly as possible. Our journals offer
        Rapid Publication Process that allows an article to be published online.
      </p>

      <div className="grid sm:grid-cols-2 gap-5">
        {steps.map((step) => (
          <StepCard
            key={step.step}
            step={step.step}
            title={step.title}
            description={step.description}
            icon={step.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Publishing;
