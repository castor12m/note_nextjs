import Image from "next/image"
import 작명 from '/public/food/test0.png'

export default function List() {

    let name = 'park'
    let age = 20
    let link = "http://www.google.co.kr"

    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']
    let 변수 = 20

    console.log('test-------------')
    console.log('test-------------' + {상품})
    console.log({상품})

    let b = 상품.map((a)=>{
      
    })

    console.log(b)

    return (
      <div>
        <h4 className="title">List</h4>
        {
          상품.map((a, i)=>{           
            return (
              <div className="food" key={i}>
                <Image src={작명} className="food-img"/>
                <h4>{a} $40</h4>
              </div>
            )    
          })
        }
      </div>
    )
  }
  