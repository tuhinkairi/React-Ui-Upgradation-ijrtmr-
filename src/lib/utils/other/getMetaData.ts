export interface metaData {
    title: string,
    description: string,
    canonical: string,
    meta: {
        charset: string,
        name: {
            keywords: string
        }
    }
}
export default function getMetaData({path,baseUrl}:{path: string, baseUrl:string}): metaData {
    // console.log(path, baseUrl)
    let meta: metaData = {
        title: `${path.split("/")[1].toLocaleUpperCase()} | International Journal Of Recent Trends In Multidiciplinary Research`,
        description: 'Looking for the best journal to publish your multidisciplinary research? IJRTMR is a peer-reviewed, open-access international journal dedicated to publishing high-quality research in science, engineering, and emerging technologies.',
        canonical: baseUrl,
        meta: {
            charset: 'utf-8',
            name: {
                keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
            }
        }
    };
    switch (path) {
        case "/":
            meta =  {
                title: 'IJRTMR - International Journal Of Recent Trends In Multidiciplinary Research',
                description: 'Looking for the best journal to publish your multidisciplinary research? IJRTMR is a peer-reviewed, open-access international journal dedicated to publishing high-quality research in science, engineering, and emerging technologies.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/ethics":
            meta =  {
                title: 'Ethics & Policies | IJRTMR - Responsible Academic Publishing',
                description: 'IJRTMR’s ethics and policies promote originality, author accountability, conflict of interest disclosure, and ethical peer review in academic publishing.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/aim-and-scope":
            meta =  {
                title: 'Aim & Scope | IJRTMR - Multidisciplinary Journal in Engineering & Technology',
                description: 'IJRTMR is a peer-reviewed, open-access journal publishing global research in engineering and technology, offering a platform for academicians and researchers.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/editorial-board":
            meta =  {
                title: 'Editorial Board | IJRTMR - International Multidisciplinary Journal',
                description: 'Explore IJRTMR’s editorial board of global experts guiding peer-reviewed research in engineering, science, and innovative multidisciplinary technologies.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/peer-review-policy":
            meta =  {
                title: 'Peer Review Policy | IJRTMR - Ensuring Research Quality',
                description: 'Understand IJRTMR’s double-blind peer review process that ensures unbiased evaluation, transparency, and publication of high-quality research papers.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/publication-ethics-policy":
            meta =  {
                title: 'Publication Ethics | IJRTMR - Integrity in Academic Publishing',
                description: 'Learn about IJRTMR’s publication ethics covering plagiarism, authorship criteria, data integrity, and ethical peer-review practices in scholarly publishing.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/indexing-and-abstracting":
            meta =  {
                title: 'Indexing & Abstracting | IJRTMR - Peer-Reviewed Open Access Journal',
                description: 'IJRTMR is abstracted and indexed in leading academic databases, enhancing discoverability for multidisciplinary research in science, technology, and engineering.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/cross-mark-policy":
            meta =  {
                title: 'Crossmark Policy | IJRTMR - Commitment to Content Integrity',
                description: 'Learn about IJRTMR’s Crossmark policy for maintaining scholarly transparency, version control, and ethical standards in published research.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/impact-factor":
            meta =  {
                title: 'Impact Factor & Indexing Certificates | IJRTMR Journal',
                description: 'IJRTMR\'s impact factor and indexing certificates demonstrate the journal’s academic credibility, global reach, and peer-reviewed publishing standards.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/FAQs":
            meta =  {
                title: 'FAQs | IJRTMR – Peer-Reviewed Open Access Journal',
                description: 'Find answers to common questions about IJRTMR’s ISSN, review time, plagiarism policy, submission guidelines, publication fees, and ethical practices.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/journal-publishing-process":
            meta =  {
                title: 'Publishing Process | IJRTMR – Submission to Publication Guide',
                description: 'Learn about the step-by-step journal publishing process at IJRTMR, including submission, peer review, revision, acceptance, and online publication.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/archives":
            meta =  {
                title: 'Archives | IJRTMR – Browse Previous Journal Issues',
                description: 'Explore IJRTMR’s archives. Access previously published issues by year, volume, and issue. Download peer-reviewed research papers in multidisciplinary fields.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/current-issue":
            meta =  {
                title: 'Current Issue | IJRTMR – Latest Research Articles Online',
                description: 'Explore the latest issue of IJRTMR. Read recently published peer-reviewed research articles in science, engineering, medicine, and multidisciplinary domains.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/publications":
            meta =  {
                title: 'Thesis Publication | IJRTMR – Publish Your Thesis Online',
                description: 'Submit your thesis or dissertation to IJRTMR for open-access publication. Publish original research in engineering, science, and multidisciplinary domains.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/thesis":
            meta =  {
                title: 'Thesis Archives | IJRTMR – Published Theses & Dissertations',
                description: 'Explore IJRTMR’s Thesis Archives. Download peer-reviewed and published postgraduate and doctoral theses in engineering, science, and multidisciplinary fields.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/conference":
            meta =  {
                title: 'Conference Archives | IJRTMR – Published Conference Papers',
                description: 'Explore IJRTMR’s conference archives. Access published proceedings, special issues, and papers from national and international academic conferences.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/conference-procedings":
            meta =  {
                title: 'Conference Proceedings | IJRTMR – Publish Conference Papers',
                description: 'IJRTMR publishes peer-reviewed conference proceedings. Partner with us to publish your conference papers and give authors global visibility.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/topics":
            meta =  {
                title: 'Research Topics | IJRTMR – Multidisciplinary Journal Subjects',
                description: 'Explore a wide range of IJRTMR research topics, including science, engineering, technology, medicine, arts, management, pharmacy, and emerging innovations.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/blogs":
            meta =  {
                title: 'Research Blogs | IJRTMR – Insights on Science & Engineering',
                description: 'Read blogs from IJRTMR on research trends, publishing tips, engineering breakthroughs, and academic writing to stay updated and improve your research impact.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/call-for-papers":
            meta =  {
                title: 'Call for Papers | IJRTMR – Submit Your Research Paper Online',
                description: ': Submit your original research to IJRTMR – a peer-reviewed, open-access journal. Now accepting papers in science, engineering, technology & related disciplines.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/instruction-for-author":
            meta =  {
                title: 'Guide for Authors | IJRTMR – Submission Guidelines & Format',
                description: 'Check IJRTMR’s submission guidelines including manuscript format, citation style, author responsibilities, and ethical publishing standards.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/guidance-for-ems":
            meta =  {
                title: 'Editorial Management System | IJRTMR – Submit Your Article Online',
                description: 'Submit articles to IJRTMR through our Editorial Management System. Register, log in, and upload your research with details like article type and research area.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/paper-status":
            meta =  {
                title: 'Check Article Status | IJRTMR – Track Your Manuscript Online',
                description: 'Track your article status with IJRTMR. Check manuscript review, acceptance, and publication updates using your registered email or submission ID.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/article-processing-charges":
            meta =  {
                title: 'Article Processing Charges | IJRTMR – Affordable Publication Fee',
                description: 'IJRTMR charges a minimal publication fee after manuscript acceptance: ₹1200–₹1400 + GST for Indian authors, $60 for international authors.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/journal-particulars":
            meta =  {
                title: 'Journal Details | IJRTMR – Multidisciplinary Research Journal',
                description: 'Get full details about IJRTMR – a bi-monthly, peer-reviewed online journal (ISSN: 2583-0368) in engineering, published by Fifth Dimension Research Publication.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/downloads":
            meta =  {
                title: 'Downloads | IJRTMR – Manuscript Template & Copyright Form',
                description: 'Download IJRTMR manuscript templates and copyright forms. Required for submission and publication of your research paper.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/contact-us":
            meta =  {
                title: 'Contact IJRTMR | Journal Support & Publication Queries',
                description: 'Have questions about publishing with IJRTMR? Contact us via email, phone, or our online form. We’re here to assist authors, reviewers, and institutions.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/privacy-policy":
            meta =  {
                title: 'Privacy Policy | IJRTMR',
                description: 'Learn how IJRTMR handles your personal information, data collection, usage, and security practices.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/terms-and-conditions":
            meta =  {
                title: 'Terms and Conditions | IJRTMR',
                description: 'Read the terms governing the use of IJRTMR website and services, including author responsibilities and publication policies.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;
        case "/refund-policy":
            meta =  {
                title: 'Refund Policy | IJRTMR',
                description: 'Understand IJRTMR\'s refund policy for article processing charges (APCs) after acceptance.',
                canonical: baseUrl,
                meta: {
                    charset: 'utf-8',
                    name: {
                        keywords: 'IJRTMR, engineering journal, scientific research journal, technology journal, peer reviewed journal, open access journal, international journal, research publication, engineering research, technology research, publish research paper, call for papers, academic journal, ISSN journal, research in engineering and technology, scientific journal India'
                    }
                }
            };
            break;

        default:
            break;
    }
    return meta;
} 