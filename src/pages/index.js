import React from "react"

import ReactMarkdown from 'react-markdown'

import { Helmet } from "react-helmet"
import { withPrefix } from "gatsby"

import variables from "./variables.json"

const title = variables.title
const email = variables.email

const organizers = [
  {
    name: "Pattarawat Chormai",
    org: "Technische Universität Berlin and Max Planck School of Cognition",
    web: 'https://pat.chormai.org'
  },
  {
    name: "Wittawat Jitkrittum",
    org: "Google Research",
    web: 'http://wittawat.com/'
  },
  {
    name: "Sanparith Marukatat",
    org: "NECTEC",
    web: 'https://www.nectec.or.th/hccru/staff/view/29'
  },
  {
    name: "Kobkaew Opasjumruskit",
    org: "German Aerospace Center (DLR), Institute of Data Science",
    web: "https://www.linkedin.com/in/kobkaew-opas/"
  },
  {
    name: "Titipat Achakulvisut",
    org: "University of Pennsylvania",
    web: "https://titipata.github.io"
  },
  {
    name: "Krikamol Muandet",
    org: "Max Planck Institute for Intelligent Systems",
    web: "http://www.krikamol.org"
  }
]

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

const schedules = [
  {
    "time": "18:30-18:40",
    "title": "Openning",
    "speaker": "",
    "url": ""
  },
  {
    "time": "18:40-19:00",
    "title": "Virtual assistant and avatar: The first step",
    "speaker": "Kwanchiva Thangthai",
    "url": "",
    "label": "Invited Talk",
    "abstract": "This talk presents the challenge of building a virtual assistant and avatar, focusing solely on speech-related issues. Then, we will share the idea of constructing an audiovisual speech dataset from found data (the video data that are available on the web).  Finally, we will demonstrate the current state of our avatar."
  },
  {
    "time": "19:00-19:10",
    "title": "Transferable Reinforcement Learning for Board Games",
    "speaker": "Natthaphon Hongcharoen",
    "url": "",
    "label": "Contributed Talk 1"
  },
  {
    "time": "19:10-19:20",
    "title": "Improving Google Colaboratory to serve Thailand Machine Learning Community",
    "speaker": "Korakot Chaovavanich",
    "url": "files/2-MLIT_Colab_paper2.pdf",
    "label": "Contributed Talk 2"
  },
  {
    "time": "19:20-19:30",
    "title": "High resolution weakly supervised localization architectures for medical images",
    "speaker": "Konpat Preechakul",
    "url": "",
    "label": "Contributed Talk 3"
  },
  {
    "time": "19:30-19:40",
    "title": "Demystifying Machine Learning Algorithms with Methods of Theoretical Physics",
    "speaker": "Thiparat Chotibut",
    "url": "files/1-Chotibut_MLIT_ExtendedAbs_2020.pdf",
    "label": "Contributed Talk 4"
  },
  {
    "time": "19:40-19:50",
    "title": "Break (10 minutes)",
  },
  {
    "time": "19:50-20:00",
    "title": "Redesigned Skip-Network for Crowd Counting with Dilated Convolution and Backward Connection",
    "speaker": "Sorn Sooksatra",
    "url": "",
    "label": "Contributed Talk 5"
  },
  {
    "time": "20:00-20:10",
    "title": "Rapid Prototyping of an Inexpensive Camera with Low-Code Machine Learning Wildlife Recognition for Pangolin Conservation Research in Thailand",
    "speaker": "Kanchit Rongchai",
    "url": "",
    "label": "Contributed Talk 6"
  },
  {
    "time": "20:10-20:20",
    "title": "A Large-Scale Data Collection from Internet for Thai Language and Speech Processing",
    "speaker": "Chompakorn Chaksangchaichot",
    "url": "./files/6-A-Large-Scale-Data-Collection-from-Internet-for-Thai-Language-and-Speech-Processing.pdf",
    "label": "Contributed Talk 7"
  },
  {
    "time": "20:20-20:30",
    "title": "Thai-to-Any-Language Parallel Corpora from Wikipedia Dumps with CRF-based Sentence Segmentation and Multilingual Sentence Encoder",
    "speaker": "Charin Polpanumas",
    "url": "./files/4-thxx_mlit2020.pdf",
    "label": "Contributed Talk 8"
  },
  {
    "time": "20:30-20:40",
    "title": "End-to-end ML Pipelines in Big Retail: Showcases of Recommendation & Search Systems at TOPS Online",
    "speaker": "Witchapong Daroontham",
    "url": "./files/8-End-to-end-ML-pipelines-in-Big-Retail.pdf",
    "label": "Contributed Talk 9"
  },
  {
    "time": "20:40-21:00",
    "title": "Speed Dating",
  },
  {
    "time": "21:00",
    "title": "Conclusion",
  },
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

export const Footer = () => {
  return <div>
    <ContentBlock header="Organizers and Contact">
      <ul style={{margin: 0, padding: 0, listStyle: `none`}}>
        { 
          organizers.map(o => {
            return <li style={{listStyle: `none`}}>
              <a style={{color: `black`}} href={o.web}>{o.name}</a>, {o.org}
            </li>
          })
        }
      </ul>
      <div style={{marginTop: `1em`}}>
        Please direct any inquiries to {email}. Thank you for your kind attention.
      </div>
    </ContentBlock>
    <hr/>
  </div>
}

export const Header = () => {
  return <div style={{padding: `2em 0`, position: `relative`, overflow: `hidden` }}>
      <div style={{
        zIndex: 0, width: `200%`, height: `200%`, position: `absolute`,
        background: `url(https://images.pexels.com/photos/680013/pexels-photo-680013.jpeg?cs=srgb&dl=pexels-neosiam-680013.jpg&fm=jpg)`,
        opacity: 1,
      }}/>
      <div style={{zIndex: 100, position: `relative`, padding: `0 10px`, color: `white`}}>
        <h1 style={{marginBottom: `5px`, textDecoration: 'uppercase', fontWeight: `normal`}}>
          {/* {title} */}
          <div style={{fontSize: `0.8em`}}>ACML 2020 WORKSHOP ON</div>
          <div style={{fontSize: `1.2em`, margin: `10px 0`}}>MACHINE LEARNING IN THAILAND</div>
        </h1>
        November 18, Online
      </div>
    </div>
}


const overviewStr = `
Over the years, Machine Learning (ML) techniques have gained increasing attention from the large public. We believe that advances in ML will have a profound impact on our society: such impacts could be on productivity, employment, and competitiveness of companies or even nations. As ACML 2020 was planned to be held in Bangkok, Thailand, before going virtual, we would like to survey the state of ML applications and research in Thailand and neighbouring countries in South East Asia.

The workshop on Machine Learning in Thailand (MLIT) aims to bring together a diverse group of ML researchers, practitioners as well as researchers from other disciplines to present and discuss their projects with the other participants. Despite the online format, we hope that the workshop would help establish and stimulate ML research activities in Thailand and in the region.
`

export default function Home() {
  return <div style={{
      width: `800px`,
      margin: `auto`,
      fontFamily: `sans-serif`,
    }}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Helmet>
    <Header/>
    <ContentBlock header="Overview">
      <ReactMarkdown children={overviewStr}/>
    </ContentBlock>

    {/* <ContentBlock header="News">
      <div style={{borderRadius: `5px`, background: `lightgray`, padding: `10px`, textAlign: `center`}}>
        <a href={withPrefix("/call-for-extended-abstracts")}>2020/11/02: Call For Extended Abstracts</a> 
      </div>
    </ContentBlock> */}

    <ContentBlock header="Participation:">
      <ReactMarkdown children={variables.participationStr}/>
    </ContentBlock>
    <ul>
      <li>Main event: <a href="#">TBD</a></li>
      <li>Livestream: <a href="#">TBD</a></li>
    </ul>

    <ContentBlock header="Schedule:">
      <table style={{width: `100%`, borderBottom: `1px solid`}}>
        <thead>
          <tr style={{fontWeight: `bold`, color: `white`, background: `black`}}>
            <td width="100px">Time (GMT+7)</td>
            <td>Event</td>
          </tr>
        </thead>
        {
          schedules.map( (event, i) => {
            return <tr style={{background: (i % 2) == 0 ? `white`: `#eef`}}>
              <td width="100px" style={{textAlign: `right`, verticalAlign: `top`, padding: `10px`}}><b>{event.time}</b>
              </td>
              <td style={{padding: `10px`}}>
                <b>{event.title}</b> 
                <br/>
                <div style={{marginTop: `10px`}}>
                  {event.speaker}
                </div>
                <div style={{marginTop: `5px`, color: `gray`}}>
                  <span style={{marginRight: `10px`}}>
                    {event.label}
                  </span>
                  {
                    event.url && <a style={{marginTop: `5px`}} href={withPrefix(event.url)}>[Extended Abstract]</a>
                  }
                </div>
                {
                  event.abstract && <details>
                    <summary>Abstract</summary>
                    {event.abstract}
                  </details>
                }
              </td>
            </tr>
          })
        }
      </table>
    </ContentBlock>

    <Footer/>
  </div>
}