import { FileDown } from "lucide-react";
import PrimaryBtn from "../../../components/Btns/PrimaryBtn";


function FullArtical() {
  return (
    <section>
      <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
        <div className="flex justify-between items-center">

        <h3 className="font-medium text-base">Abstract</h3> 
        <PrimaryBtn className="whitespace-nowrap"> 
            View PDF
            <FileDown size={18} className="ml-4"/>
        </PrimaryBtn>
        </div>
        <p>
          Antibiotic resistance is one of the most severe public health crises
          that we face in current medical practice. Every year, at least 2.8
          million people get an antibiotic-resistant infection, and more than
          35,000 people die. In addition to the potential for serious morbidity
          and mortality, antibiotic-resistant infections add unnecessary and
          substantial costs to the healthcare system.
        </p>
        <p>
          The impetus for finding solutions in what has been established as a
          dire situation is overwhelmingly twofold: the necessity with which it
          must be addressed gives doctors, patients, researchers, policymakers,
          and caregivers the means to thoroughly address the subject, and the
          consequences of inaction catapult researchers into a world of
          microbial and evolutionary surveillance of unparalleled depth.
        </p>
        <p>
          This review article discusses the historical, technical, and
          futurological aspects of antibiotic resistance, presenting an
          evidence-based collection of findings on resistance and the various
          mechanisms of resistance that have evolved as a result of our use and
          misuse of antibiotics.
        </p>
        <p>
          The social, commercial, and economic implications of antibiotic use
          and resistance must likewise be addressed through public health policy
          and the motivation of those in the fields of medicine, epidemiology,
          and microbiology. Alternative techniques to the use of antibiotics,
          including vaccine development and phage therapy, are thoroughly
          discussed as potential solutions to the current impasse.
        </p>
      </div>
    </section>
  )
}

export default FullArtical;
