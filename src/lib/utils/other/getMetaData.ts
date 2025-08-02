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
    console.log(path, baseUrl)
    let meta: metaData = {
        title: `${path.split("/")[1].toLocaleUpperCase()} | International Journal of Scientific Research in Engineering`,
        description: 'IJSRET publishes high-quality research in engineering and technology. Submit your paper or explore the latest scientific advancements.',
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
                title: 'International Journal of Scientific Research in Engineering',
                description: 'IJSRET publishes high-quality research in engineering and technology. Submit your paper or explore the latest scientific advancements.',
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
                title: 'IJRTMR Ethics & Policies - Ensuring Research Integrity',
                description: 'Explore IJRTMR’s ethics and publication policies, ensuring high standards of integrity, peer review, and transparency in scientific research.',
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
                title: 'IJRTMR Mission & Scope | Research Goals',
                description: 'Explore IJSREATs mission, scope, and research goals. Learn how we advance knowledge in science, engineering, and technology.',
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
                title: 'IJRTMR Editorial Board - Experts in Engineering Research',
                description: 'Meet the esteemed editorial board of IJRTMR, composed of leading experts and scholars ensuring rigorous peer review and high-quality publications.',
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
                title: 'Peer Review Policy - IJRTMR Journal Standards',
                description: 'Understand the peer review policy of IJRTMR, designed to maintain the highest quality of research in engineering and technology publications.',
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
                title: 'IJRTMR Publication Ethics - Research Integrity Standards',
                description: 'Read about IJRTMR’s publication ethics policy, which ensures research integrity, prevents misconduct, and promotes transparency in scholarly publishing.',
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
                title: 'IJRTMR Indexing & Abstracting - Global Research Visibility',
                description: 'Learn about the indexing and abstracting services that feature IJRTMR, enhancing the visibility and impact of published research worldwide.',
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
                title: 'IJRTMR Impact Factor - Measuring Research Influence',
                description: 'Explore the impact factor of IJRTMR, highlighting the journal’s significance and influence in the field of engineering and technology research.',
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
                title: 'IJRTMR FAQs - Get Answers to Your Publishing Queries',
                description: 'Find answers to common questions about IJRTMR, including submission guidelines, peer review, publication charges, and indexing information.',
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
                title: 'Archives | International Journal | IJRTMR',
                description: 'Explore the IJRTMR archives for top research papers in engineering and technology. Access past volumes and stay updated with the latest innovations',
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
                title: 'IJRTMR Conferences | Events & Updates',
                description: 'Stay updated on IJRTMR conferences, events, and calls for papers. Join global experts in science and technology discussions.',
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
                title: 'Research Topics Covered by IJRTMR Journal',
                description: 'Explore the broad range of research topics published in IJRTMR, including engineering, technology, and scientific advancements.',
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
                title: 'IJRTMR Call for Papers - Submit Your Research Today',
                description: 'IJRTMR invites researchers to submit original papers for publication. Join our global community of scholars in engineering and technology.',
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
                title: 'Author Instructions - Submit Your Paper to IJRTMR',
                description: 'Follow our detailed instructions for authors to ensure a smooth submission process and compliance with IJRTMR’s publication standards.',
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
                title: 'Editorial Management System (EMS) - IJRTMR Guidelines',
                description: 'Learn how to navigate the IJRTMR Editorial Management System (EMS) for manuscript submission, peer review, and editorial workflow.',
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
                title: 'IJRTMR Article Processing Charges - Open Access Fees',
                description: 'Find out about IJRTMR’s article processing charges, ensuring high-quality open-access publishing with transparent pricing.',
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
                title: 'IJRTMR Downloads - Author Guidelines & Templates',
                description: 'Download essential resources, including author guidelines, submission templates, and research paper formats for IJRTMR.',
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
                title: 'Contact IJRTMR - Get in Touch with Our Team',
                description: 'Have questions about publishing with IJRTMR? Contact our editorial team for support regarding submissions, peer review, and indexing.',
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