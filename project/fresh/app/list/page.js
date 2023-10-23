export default function List() {

    let name = 'park'
    let age = 20
    let link = "http://www.google.co.kr"

    let 상품 = ['Tomatoes', 'Pasta', 'Coconut']

    return (
      <div>
        <h4 className="title">List</h4>
        {
          상품.map((a, i)=>{           
            return (
              <div className="food" key={i}>
                <img src={`/food/test${i}.png`} className="food-img"/>
                <h4>{a} $40</h4>
              </div>
            )    
          })
        }
      </div>
    )
  }
  