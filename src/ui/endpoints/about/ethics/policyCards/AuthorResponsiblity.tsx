import Titleh2 from "../../../../other/Titleh2";

export default function AuthorResponsiblity() {
  return (
     <div className="space-y-4 pb-4 text-muted-foreground text-base 2xl:text-lg text-[#333333]">
                <Titleh2>Author Responsibilities</Titleh2>
                <p className="mt-6">
                    <span className="font-semibold">Accuracy:</span>  Authors must ensure the accuracy of their work and promptly correct errors if found.
                </p>
    
                <p>
                    <span className="font-semibold">Copyright & Licensing:</span> Authors may need to transfer copyright or publish under an open-access license (check the journal’s policy).
                </p>
    
                <p>
                    <span className="font-semibold">Retractions & Corrections:</span> If errors are discovered post-publication, authors must cooperate in issuing corrections or retractions.
                </p>
            </div>
  )
}
