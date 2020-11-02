import React from "react"

import ReactMarkdown from 'react-markdown'

import { withPrefix } from "gatsby"

import { Helmet } from "react-helmet"

import {Header, Footer} from "./index"
import variables from "./variables.json"

const title = variables.title

const timeline = [
  {
    date: 'November 9, 2020 at 11am (UTC+7, Bangkok time)',
    desc: 'Submission deadline'
  },
  {
    date: 'November 11, 2020',
    desc: 'Notification of acceptance'
  },
  {
    date: 'November 18, 2020 at 6:30-9pm (UTC+7, Bangkok time)',
    desc: 'Workshop day'
  }
]

const ContentBlock = ({header, children}) => {
  return <div id={header} style={{margin: `2em 0`}}>
    <a href={`#${header}`} style={{color: `black`, textDecoration: `none`}}>
      <h2 style={{marginBottom: `0.5em`}}>{header}</h2>
    </a>
    <div>
      {children}
    </div>
  </div>
}

const callStr = `
Workshop on Machine Learning in Thailand (MLIT), ACML 2020.

Recent development of machine learning has undoubtedly changed our lives for the better. Deployment of machine learning models has become a norm for solving complex problems where handcrafting a solution is not feasible. These include automatic face recognition, medical image analysis, speech processing, among others. While these machine learning applications have become increasingly more common in Thailand, its community in Thailand (both researchers and practitioners) that drives such innovations remains largely fragmented, and is in fact underrepresented in the global machine learning community. The workshop on Machine Learning in Thailand (MLIT) 2020 aims to identify and connect these diverse groups of researchers and practitioners whose works revolve around machine learning in the context of Thailand. The workshop will survey and discuss the current state of machine learning advances in Thailand.

We invite contributions to the MLIT 2020 in the form of an extended abstract. Research topics that are relevant to machine learning AND to Thailand’s development are of interest to MLIT 2020. These include but not limited to

- Thai language processing 
- Machine learning for data collection and data analysis
- Image processing, generation, and recognition 
- Machine learning and social science in Thailand
- Fairness, privacy, ethics and bias in machine learning
- Machine learning applications that help foster the relationship of Thailand and its neighbouring countries
- Machine learning in agriculture
- Machine learning for disaster risk management, social good, environmental protection, wildlife conservation, and other issues that Thailand faces.

Topics that are of interest to MLIT 2020 are intentionally kept broad to accommodate diverse groups of researchers and practitioners that are fragmented at this stage. **The MLIT 2020 welcomes submissions from everyone regardless of their origin and nationality**. Submissions that fall outside of these topics but are considered relevant to machine learning in Thailand are also welcome. In particular, these include purely theoretical research on machine learning conducted in Thailand, regulations and law that govern machine learning usages in Thailand, among others.

A submission should be of at most one page (paper format: A4, portrait) in English with font size of 11pt in PDF file format. Tables and figures, if any, are allowed, and must fit within the one-page limit. Cited references may extend beyond the 1-page limit. No supplementary material is allowed. The review process will be single-blind; that is, reviewers know the identity of authors, but authors do not know the identity of reviewers. The submission should include all authors’ names, affiliations and email addresses.

All accepted submissions will be made available on the website. Authors of an accepted submission will be invited to give a live, online presentation of 5-8 minutes. The exact presentation length will be decided in due course.

Please submit your extended abstract at [**our Airtable form**](https://airtable.com/shrnhQ9KuR4ruUTg8). The submission deadline is Monday 9 November 2020 at 11am (UTC+7, Thailand time).
`

const dualsubmissionStr = `
The MLIT 2020 is intended to be an online meetup to connect researchers and practitioners who are interested in machine learning in Thailand. Accordingly, a research article that is currently under review or has previously appeared in a journal, a workshop, or a conference can be submitted to the MLIT 2020 in the form of an extended abstract. There will be no proceedings produced. The MLIT 2020 permits an accepted abstract and its extension (such as a full paper) to be submitted to other venues.
`

export default function Home() {
  return <div style={{
      width: `800px`,
      margin: `auto`,
      fontFamily: `sans-serif`,
    }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{`${title}: Call For Extended Abstracts`}</title>
    </Helmet>
    <Header/>
    <div style={{marginTop: `10px`}}>
      <a href={withPrefix("/")}>
        [Back to Main Page]
      </a>
    </div>
    <ContentBlock header="Call for Extended Abstracts">
      <ReactMarkdown children={callStr}/>
    </ContentBlock>

    <ContentBlock header="Important dates:">
      <ul style={{margin: 0, padding: 0, listStyle: `none`}}>
        { 
          timeline.map(t => {
            return <li style={{listStyle: `none`}}>
              {` `}<b>{t.desc}</b>: {t.date}
            </li>
          })
        }
      </ul>
    </ContentBlock>

    <ContentBlock header="Participation:">
      <ReactMarkdown children={variables.participationStr}/>
    </ContentBlock>

    <ContentBlock header="Dual submission policy">
      <ReactMarkdown children={dualsubmissionStr}/>
    </ContentBlock>
    <Footer/>
  </div>
}
