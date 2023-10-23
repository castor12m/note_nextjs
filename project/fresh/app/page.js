import Link from "next/link"

export default function Home() {

  let name = 'park'
  let age = 20
  let link = "http://www.google.co.kr"

  return (
    <div>
      <h4 className="title">test</h4>
      <p className="title-sub">name : {name}</p>
      <p className="title-sub">age : {age}</p>
      <p style={{color: 'red', fontSize:'30px'}}>age : {age}</p>
      <a href={link}>링크</a>
    </div>
  )
}
