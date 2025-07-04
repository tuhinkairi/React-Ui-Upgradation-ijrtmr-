import { Link } from "react-router-dom";
import type { EditorialMember } from "../../../../types/Api";

// const publications = [
//   {
//     id: 1,
//     text: `T. Kaur and A. Thirugnanam, "Effect of porous activated charcoal reinforcement on mechanical and in-vitro biological properties of polyvinyl alcohol composite scaffolds", Journal of Materials Science & Technology, vol.33, no.7, pp.734–43, Elsevier 2017, `,
//     doi: '10.1016/j.jmst.2016.06.020',
//   },
//   {
//     id: 2,
//     text: `K. K. Ramajayam, A. Kumar, S. K. Sarangi, and A. Thirugnanam, "A numerical study on optimising the cryosurgical process for effective tumour necrosis", Heat and Mass Transfer, vol.53, no.5, pp.1685–1697, Springer 2017, `,
//     doi: '10.1007/s00231-016-1928-9',
//   },
//   {
//     id: 3,
//     text: `T. Kaur and A. Thirugnanam, "Tailoring in vitro biological and mechanical properties of polyvinyl alcohol reinforced with threshold carbon nanotube concentration for improved cellular response", RSC Advances, vol.6, no.46, pp.39982–39992, Royal Society of Chemistry 2016, `,
//     doi: '10.1039/c6ra08006e',
//   },
//   {
//     id: 4,
//     text: `S. Kar, T. Kaur, and A. Thirugnanam, "Microwave-assisted synthesis of porous chitosan–modified montmorillonite–hydroxyapatite composite scaffolds", International journal of biological macromolecules, vol.82, pp.628–636, Elsevier 2016, `,
//     doi: '10.1016/j.ijbiomac.2015.10.060',
//   },
//   {
//     id: 5,
//     text: `V. Vyas, T. Kaur, and A. Thirugnanam, "Chitosan composite three dimensional macrop­spheric scaffolds for bone tissue engineering", International Journal of Biological Macromolecules, vol.104, pp.1946–1954, Elsevier 2017, `,
//     doi: '10.1016/j.ijbiomac.2017.04.055',
//   },
// ];
// todo: get dynamic update and shearable link
export default function AuthorProfile({member}:{member:EditorialMember}) {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold text-primary">
        {member?.member_name}
      </h2>
      <p className="text-sm leading-relaxed">
        {member.member_designation}
      </p>
      <div className="space-y-4">
        <address className="flex items-center not-italic gap-2"><strong>Address : </strong>{member.member_address}</address>
        <h1 className="flex items-center gap-2"><strong>E-Mail : </strong>{member.member_email}</h1>
        <h1 className="flex items-center gap-2"><strong>Profile Link:</strong><Link to={member.member_website}>{member.member_website??"Not Avalable"}</Link></h1>
        <address className="flex items-center not-italic gap-2"><strong>Country : </strong>{member.member_country}</address>
      </div>

      <div className="space-y-6 text-sm leading-relaxed">
      <h3 className="text-lg font-bold ">Publications</h3>
        {/* {publications.map((pub) => (
          <div key={pub.id} className="flex items-start gap-2">
            <span className="">{pub.id}.</span>
            <p>
              {pub.text}
              <span className="text-primary font-medium">{pub.doi}</span>
            </p>
          </div> */}
        {member.member_publication_list.split(".").map((pub,idx) => (
          <ul key={idx} className="flex items-start gap-2 list-inside list-decimal text-shadow">
            <li>
              {pub}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}
