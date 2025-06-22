import { useState } from "react";
import Title from "../../other/Title";
import { AdvisoryBoardCard } from "./AdvisoryBoardCard";
import { ContactCard } from "./ContractCard";
import { Pagination } from "./Pagination";


export const EditorBoard = () => {
    const [page, setPage] = useState(1);
    return (
        <section className="editorial-board-section px-16 py-2 space-y-6">
            <Title>Editorial Board</Title>
            <div className="grid grid-cols-2 gap-6 justify-center">
                <ContactCard
                    role="Patron/Editor-in-chief :"
                    name="Dr. S. Sivaganesan"
                    designation="Professor & Head Department of Electrical & Electronics Engineering."
                    organization="Holymary Institute of Technology & Science.  Hyderabad-501301.India"
                    email="editorinchief@ijsreat.com, sivaganesan@hmgi.ac.in"
                />
                <ContactCard
                    role="Managing Editor:"
                    name="Dr. S. Thanga Revathi"
                    designation="Assistant Professor Department of Computer Science and Engineering"
                    organization="SRM Institute of Science and Technology, Chennai–603203. India."
                    email="thangars@srmist.edu.in"
                />
                {/* </div>
            <div className="p-4 grid grid-cols-2 gap-8 justify-center"> */}
                <AdvisoryBoardCard
                    image="/editorial/board/man1.png"
                    boardTitle="Advisory Editorial Board"
                    name="Prof. Dr. Alireza Heidari, Ph.D., D.Sc."
                    designation="Full Distinguished Professor"
                    address="California, USA"
                    onViewMore={() => alert("More details coming soon")}
                />
                <AdvisoryBoardCard
                    image="/editorial/board/man1.png"
                    boardTitle="Advisory Editorial Board"
                    name="Prof. Dr. Alireza Heidari, Ph.D., D.Sc."
                    designation="Full Distinguished Professor"
                    address="California, USA"
                    onViewMore={() => alert("More details coming soon")}
                />
                <AdvisoryBoardCard
                    image="/editorial/board/man1.png"
                    boardTitle="Advisory Editorial Board"
                    name="Prof. Dr. Alireza Heidari, Ph.D., D.Sc."
                    designation="Full Distinguished Professor"
                    address="California, USA"
                    onViewMore={() => alert("More details coming soon")}
                />
                <AdvisoryBoardCard
                    image="/editorial/board/man1.png"
                    boardTitle="Advisory Editorial Board"
                    name="Prof. Dr. Alireza Heidari, Ph.D., D.Sc."
                    designation="Full Distinguished Professor"
                    address="California, USA"
                    onViewMore={() => alert("More details coming soon")}
                />
            </div>
            <div className="my-10">
                <Pagination
                    currentPage={page}
                    totalPages={10}
                    onPageChange={(p) => {
                        if (p < 1 || p > 10) return; // Assuming total pages is 10
                        setPage(p)
                    }}
                />
            </div>
        </section>
    );
};
